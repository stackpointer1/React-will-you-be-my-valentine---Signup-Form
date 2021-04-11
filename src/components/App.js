import React, { Component, useState } from "react";
// import InputBox from "./inputBox";
// import SelectInput from "./selectGender";
import "./styles.css";

const App = () => {
  const [fullName, setFullName] = useState({
    name: "",
    email: "",
    gender: "Male",
    number: "",
    password: ""
  });

  const [inputError, setInputError] = useState({
    inputName: false,
    inputEmail: false,
    inputGender: false,
    inputNumber: false,
    inputPass: false
  });
  const [userName, setUserName] = useState("");

  const inputChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;

    setFullName((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  };
  const buttonClick = () => {
    if (fullName.name === "") {
      console.log("error");
      setInputError((prevalue) => {
        return { ...prevalue, inputName: true };
      });
    } else {
      setInputError((prevalue) => {
        return { ...prevalue, inputName: false };
      });
    }
    if (!fullName.email.includes("@") || fullName.email === "") {
      console.log("error");
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputEmail: true
        };
      });
    } else {
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputEmail: false
        };
      });
      let msg = fullName.email.split("@");
      setUserName("Hello" + " " + msg[0]);
    }
    if (fullName.gender === "") {
      console.log("error");
      setInputError((prevalue) => {
        return { ...prevalue, inputGender: true };
      });
    } else {
      setInputError((prevalue) => {
        return { ...prevalue, inputGender: false };
      });
    }
    if (fullName.number === "") {
      console.log("error");
      setInputError((prevalue) => {
        return { ...prevalue, inputNumber: true };
      });
    } else {
      setInputError((prevalue) => {
        return { ...prevalue, inputNumber: false };
      });
    }
    if (fullName.password.length < 6 || fullName.password === "") {
      console.log("error");
      setInputError((prevalue) => {
        return { ...prevalue, inputPass: true };
      });
    } else {
      setInputError((prevalue) => {
        return { ...prevalue, inputPass: false };
      });
    }
  };
  return (
    <div id="main">
      {!inputError.inputName &&
      !inputError.inputEmail &&
      !inputError.inputGender &&
      !inputError.inputNumber &&
      !inputError.inputPass ? (
        <h1>{userName}</h1>
      ) : (
        ""
      )}
      <input
        data-testid="name"
        type="alphanumeric"
        placeholder="Enter your Name"
        defaultValue=""
        name="name"
        onChange={inputChange}
      />
      {inputError.inputName ? <p>Name Error</p> : ""}
      <input
        data-testid="email"
        type="email"
        placeholder="Enter your Email"
        defaultValue=""
        name="email"
        onChange={inputChange}
      />
      {inputError.inputEmail ? <p>Email must contain @</p> : ""}

      <select data-testid="gender" name="gender" onChange={inputChange}>
        <option>Male</option>
        <option>Female</option>
        <option>others</option>
      </select>

      {inputError.inputGender ? <p>gender Error</p> : ""}

      <input
        data="phoneNumber"
        type="number"
        placeholder="Enter your Phone Number"
        defaultValue=""
        name="number"
        onChange={inputChange}
      />
      {inputError.inputNumber ? <p>Phone Number Error</p> : ""}
      <input
        data="password"
        type="password"
        placeholder="Enter password"
        defaultValue=""
        name="password"
        onChange={inputChange}
        // value={lname}
      />
      {inputError.inputPass ? (
        <p> Password must contain atleast 6 letters</p>
      ) : (
        ""
      )}
      <button data-testid="submit" onClick={buttonClick}>
        Submit
      </button>
    </div>
  );
};

export default App;