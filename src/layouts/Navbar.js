import "./../colorScheme.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logout from "./../assets/logout.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="d-flex flex-row navbar navbar-expand-lg bg-purple1 px-2 py-2 d-flex justify-content-between">
      <div className="d-flex">
        <Link
          className="bg-purple1"
          to="./dashboard"
        >
          <h4 className="navTitle text-center">Employee Register</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-around">
        <Link
          className="mx-3 bg-purple1"
          to="./aboutus"
        >
          About Us
        </Link>

        <Link
          className="mx-3 bg-purple1"
          to="./login"
        >
          <img src={logout} alt="logout" />
        </Link>
      </div>
    </nav>
  );
}
