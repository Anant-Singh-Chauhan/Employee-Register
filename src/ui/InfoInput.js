import { useState } from "react";
import pwdEye from "./../assets/pwdEye.svg";
import "./infoInput.css";
import Itooltip from "./Itooltip";


export default function InfoInput(props) {
  const [pwdType, setpwdType] = useState("password");

  function togglePasswordVisibiliy() {
    if(pwdType === "password") setpwdType("text");
    else setpwdType("password");
  }

  return (
    <div id={props.id} className="infoInput w-100 border rounded p-1 d-flex flex-row justify-content-between my-2">
      <input
        type={props.type==="text"?props.type:pwdType}
        className="border-0 rounded p-1 "
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <div className="infoInput-utils d-flex flex-row justify-content-evenly">
        { 
            props.type === "password" &&
            <img src={pwdEye} alt="tooglePwdVisibilty" className="p-1" onClick={togglePasswordVisibiliy}/>
        }
        {
          props.needTooltip === "true" &&
          <Itooltip tooltipText={props.tooltipText}/>
        }

      </div>
    </div>
  );
}
