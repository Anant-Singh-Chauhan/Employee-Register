import LoginForm from "../components/LoginForm";
import "./../colorScheme.css"

export default function Login() {
  return (
    <div className="d-flex flex-row w-75 h-75 mx-auto my-auto flex-wrap border border-success rounded align-center " >
      <div className="w-50">
        <div>
          <span>Welcome to</span>
          <h2>Employee Register</h2>
        </div>
        
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nihil laudantium distinctio ad, rerum nemo a?</p>
        
      </div>
      <div className="w-50 ">
        <LoginForm/>
      </div>
    </div>    
  );
}
