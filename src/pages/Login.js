import LoginForm from "../components/LoginForm";
import "./../colorScheme.css";

export default function Login() {
  return (
    <>
      <div className="w-50 d-flex flex-column border border-purple1 rounded p-3 ">
        <span>Welcome to</span>
        <h2 className="border-purple2">HealthTech Solutions</h2>
        <p className="tagline">Empowering Healthcare Innovations</p>
        <p>
          ...where we merge technology with compassion to revolutionize
          healthcare. Together, let's pave the way for a healthier tomorrow.
        </p>
      </div>

      <div className="w-50 ">
        <LoginForm />
      </div>
    </>
  );
}
