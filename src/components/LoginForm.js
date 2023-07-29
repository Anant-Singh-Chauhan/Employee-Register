import { useState } from "react";
import InfoInput from "../ui/InfoInput";
import "./LoginForm.css";
import img1_login from "./../assets/img1_login.svg";
import newUser from "./../assets/newUser.svg";
import "./../colorScheme.css";


export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isValid_credentials, setIsValidCredentials] = useState(false);

  const defaultUserName = "asc";
  const defaultPassword = "asc";

  function ValidateLoginCredentials(event) {
    // console.log({"userName":userName,"password":userPassword});
    if (userName === "" || userPassword === "") {
      setIsValidCredentials(false);
      event.target.classList.toggle("run");
      if (userName === "") ValidationError("login_username");
      if (userPassword === "") ValidationError("login_password");
      // document.getElementById("div_loginSubmit").classList.toggle("flexRowReverse");
    } else {
      setIsValidCredentials(true);
    }
  }

  function ValidationError(id) {
    document.getElementById(id).classList.add("validationError");
    setTimeout(() => {
      document.getElementById(id).classList.remove("validationError");
    }, 1000);
  }

  function LoginUser() {
    if (isValid_credentials) {
      //login logic...

      if (userName === defaultUserName && userPassword === defaultPassword) {
        console.log("Login Successful!");
      } else {
        console.log("Login failed!");
      }
    }
  }

  function onChangeUserName(event) {
    setUserName(event.target.value);
  }

  function onChangePassword(event) {
    setUserPassword(event.target.value);
  }

  return (
    <div className="loginFrame container border border-primary rounded p-3 ">
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-between">
          <img src={img1_login} alt="img1" />
          <label className="mx-2" style={{ color: "#9400D3", fontSize: "1.8rem"}}>Login</label>
        </div>
        <div>
          <img src={newUser} alt="newUser" />
        </div>
      </div>

      <InfoInput
        id="login_username"
        placeholder="UserName"
        infoText="Enter valid userName"
        type="text"
        needTooltip="true"
        tooltipText="input valid userName"
        value={userName}
        onChange={onChangeUserName}
      />
      <InfoInput
        id="login_password"
        placeholder="Password"
        infoText="Enter valid password"
        type="password"
        value={userPassword}
        onChange={onChangePassword}
      />
      <div className="d-flex flex-row">
        <button
          className="btnLogin btn bg-purple3"
          onMouseOver={ValidateLoginCredentials}
          onClick={LoginUser}
        >
          Go
        </button>
      </div>
    </div>
  );
}
