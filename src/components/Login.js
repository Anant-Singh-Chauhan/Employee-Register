import InfoInput from "../ui/InfoInput";

export default function Login() {
  return (
    <div className="loginFrame container border border-primary rounded p-3 ">
      <div>
        <label className="">Login</label>
      </div>

      <InfoInput placeholder="UserName" infoText="Enter valid userName" type="text"/>
      <InfoInput placeholder="Password" infoText="Enter valid password" type="password"/>
      <button>Go</button>
    </div>
  );
}
