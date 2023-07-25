import info_icon from "./../assets/info.svg";
import pwdEye from "./../assets/pwdEye.svg";
import "./infoInput.css";

export default function InfoInput(props) {
  return (
    <div className="infoInput w-100 border rounded p-1 d-flex flex-row justify-content-between my-2">
      <input
        type={props.type}
        className="border-0 rounded p-1 "
        placeholder={props.placeholder}
      />
      <div className="d-flex flex-row justify-content-evenly">
        { 
            props.type == "password" &&
            <img src={pwdEye} alt="info" className="p-1" onClick={(event)=>{
                
            }}/>
        }
        <img src={info_icon} alt="info" className="p-1" />

      </div>
    </div>
  );
}
