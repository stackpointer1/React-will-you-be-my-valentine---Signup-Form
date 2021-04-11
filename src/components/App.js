import React, { useState } from "react";
import "./styles.css";
import SelectInput from "./selectGender";
// import InputBox from './InputBox';

const App = () => {
  const [fullName, setFullName] = useState({
    name: "",
    email: "",
    gender: "",
    number: "",
    password: ""
  });
  const [inputError, setInputError] = useState({
    inputName: false,
    inputEmail: false,
    inputGender: false,
    inputNumber: false,
    inputPassword: false
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
        return {
          ...prevalue,
          inputName: true
        };
      });
    } else {
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputName: false
        };
      });
    }
    if (fullName.email.includes("@") ==='true'|| fullName.email === "") {
      console.log("errror");
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
      let wish = fullName.email.split("@");
      setUserName("Hello" + " " + wish[0]);
    }
    if (fullName.gender === "") {
      console.log("error");
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputGender: true
        };
      });
    } else {
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputGender: false
        };
      });
    }
    if (fullName.number === "") {
      console.log("error");
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputNumber: true
        };
      });
    } else {
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputNumber: false
        };
      });
    }
    if (fullName.password.length < 6 || fullName.password === "") {
      console.log("error");
      setInputError((prevalue) => {
        return { ...prevalue, inputPassword: true };
      });
    } else {
      setInputError((prevalue) => {
        return {
          ...prevalue,
          inputPassword: false
        };
      });
    }
  };
  return (
    <div id="main">
      {!inputError.inputName &&
      !inputError.inputEmail &&
      !inputError.inputGender &&
      !inputError.inputNumber &&
      !inputError.inputp ? (
        <h1>{userName}</h1>
      ) : (
        ""
      )}

      <input
        data="data-testid"
        type="text"
        placeholder="enter your name"
        name="name"
        onChange={inputChange}
      />
      {inputError.inputName ? <p>NameError</p> : ""}
      <br />
      <br />
      <input
        data="data-testid"
        type="alphanumeric"
        placeholder="enter your Email"
        defaultValue=""
        name="email"
        onChange={inputChange}
      />
      {inputError.inputEmail ? <p>Email must conatin @</p> : ""}
      <br />
      <br />

      <SelectInput data="gender" name="gender" onChange={inputChange} />
      {inputError.inputGender ? <p>gender Error</p> : ""}


      <input
        data="data-testid"
        type="number"
        placeholder="enter your phone Number"
        defaultValue=""
        name="number"
        onChange={inputChange}
      />
      {inputError.inputNumber ? <p>NumberError</p> : ""}
      <br />
      <br />
      <input
        data="data-testid"
        type="password"
        placeholder="enter password"
        defaultValue=" "
        name="password"
        onChange={inputChange}
      />
      {inputError.inputPassword ? <p>passwordError</p> : ""}
      <br />
      <br />
      <button data-testid="submit" onClick={buttonClick}>
        Submit
      </button>
    </div>
  );
};
export default App;

