import LoginForm from "../components/LoginForm";
import "./../colorScheme.css";
import "./Login.css";

export default function Login() {
  return (
    <div className="login d-flex flex-row flex-wrap border border-purple2 rounded align-items-center p-4 mx-auto my-auto justify-content-evenly">
      <div className="loginTitle w-50 d-flex flex-column border border-purple1 rounded p-3">
        <span>Welcome to</span>
        <h2 className="border-purple2">HealthTech Solutions</h2>
        <p className="tagline">Empowering Healthcare Innovations</p>
        <p>
          ...where we merge technology with compassion to revolutionize
          healthcare. Together, let's pave the way for a healthier tomorrow.
        </p>
      </div>

      <div className="loginForm">
        <LoginForm />
      </div>
    </div>
  );
}
