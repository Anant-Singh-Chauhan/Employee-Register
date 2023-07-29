import "./../colorScheme.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import logout from "./../assets/logout.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-purple1 px-2 d-flex justify-content-between">
      <div className="">
        <Link
          className="mx-3 bg-purple1"
          style={{ textDecoration: "none" }}
          to="./dashboard"
        >
          <h4 className="text-center" style={{fontWeight: 200}}>Employee Register</h4>
        </Link>
      </div>
      <div>
        <Link
          className="mx-3 bg-purple1"
          style={{ textDecoration: "none" }}
          to="./aboutus"
        >
          About Us
        </Link>

        <Link
          className="mx-3 bg-purple1"
          style={{ textDecoration: "none" }}
          to="./login"
        >
          <img src={logout} alt="logout" />
        </Link>
      </div>
    </nav>
  );
}
