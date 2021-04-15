import React, {Component, useState} from "react";



const App = () => {
  const initialState={
    nameMessage:'',
    emailMessage:'',
    phoneMessage:'',
    passwordMessage:'',
    error:'',
    congrats:'',
  }
  const [data,setData]=useState(initialState)
  const formValidation = (e) => {
    e.preventDefault();
    const Name = document.querySelector("input[data-testid=name]").value;
    const email = document.querySelector("input[data-testid=email]").value;
    const phone = document.querySelector("input[data-testid=phoneNumber]").value;
    const password = document.querySelector("input[data-testid=password]").value;

    if (Name === "" || phone === "" || password === "" || email === "") {
      setData((prevState)=>({
        ...initialState,
        error:"All fields are mandatory"
      }))
    }
    else if (/[^0-9a-zA-Z]/.test(Name)) {
      setData((prevState)=>({
        ...initialState,
        nameMessage:"Name is not alphanumeric"
      }))
    } else if (email.indexOf("@") === -1) {
      setData((prevState)=>({
        ...initialState,
        emailMessage:"Email must contain @"
      }))
    } else if (isNaN(phone)) {
      setData((prevState)=>({
        ...initialState,
        phoneMessage:"Phone Number must contain only numbers"
      }))
    } else if (password.length <= 6) {
      setData((prevState)=>({
        ...initialState,
        passwordMessage:"Password must contain atleast 6 letters"
      }))
    } else {
      let userName = email.slice(0, email.indexOf("@"));
      setData((prevState)=>({
        ...initialState,
        congrats:`Hello ${userName}`
      }))
    }
  };
  return (
    <>
      <form onSubmit={formValidation}>
        <div>
          Name :
          <input type="text" data-testid="name" />
          <div>{data.nameMessage}</div>
        </div>
        <br />
        <div>
          Email address :
          <input type="text" data-testid="email" />
          <div>{data.emailMessage}</div>
        </div>
        <br />
        <div>
          Gender :
          <select data-testid="gender">
            <option value="male" selected>
              Male
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br />
        <div>
          Phone Number :
          <input type="text" data-testid="phoneNumber" />
          <div>{data.phoneMessage}</div>
        </div>
        <br />
        <div>
          Password :
          <input type="password" data-testid="password" />
          <div>{data.passwordMessage}</div>
        </div>
        <br />
        <div>
          <input type="submit" data-testid="submit" />
        </div>
        <div>{data.error}</div>
        <div>{data.congrats}</div>
      </form>
    </>
  );
};

export default App;
