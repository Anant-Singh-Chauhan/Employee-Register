import { Link } from "react-router-dom";
import github from "./../assets/github.svg";
import linkedIn from "./../assets/linkedin.svg";
import facebook from "./../assets/facebook.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      className="text-center text-white bg-purple1"
      style={{ backgroundColor: "#3f51b5" }}
    >
      <div className="container">
        <section className="mt-1">
          <div className="row text-center d-flex justify-content-center pt-4">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="./aboutus" className="text-white">
                  About us
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="#!" className="text-white">
                  Products
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="#!" className="text-white">
                  Awards
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="#!" className="text-white">
                  Help
                </Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <Link to="#!" className="text-white">
                  Contact
                </Link>
              </h6>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="mb-2">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <p>
                A product of <strong>HealthTech Solutions Pvt. Ltd.</strong>
              </p>
              <hr></hr>
              <p>
                We value our employees and are committed to providing a seamless
                login experience. If you encounter any issues or have any
                feedback, please don't hesitate to reach out to our support
                team. Thank you for being a part of our organization, and we
                wish you a productive and fulfilling day ahead!
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="footer-socials d-flex flex-row justify-content-between">
        <div className="text-center p-3">
          © 2020 Copyright:
          <Link className="text-white mx-1" to="./dashboard">
            HealthTech Solutions Pvt. Ltd.
          </Link>
        </div>
        <div className="text-center p-3">
          <Link to="" className="text-white me-4">
            <img src={github} alt="github" />
          </Link>
          <Link to="" className="text-white me-4">
            <img src={linkedIn} alt="linkedIn" />
          </Link>
          <Link to="" className="text-white me-4">
            <img src={facebook} alt="facebook" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
