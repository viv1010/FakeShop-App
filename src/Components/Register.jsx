import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div>
        <form>
          <h2 className="text-center mb-4 mt-4">Sign Up</h2>
          
          <div className="d-flex form-outline align-items-center mb-3">
            <i className="fa fa-user me-2 pe-2"></i>
            <input
              type="text"
              id="loginName"
              className="form-control"
              placeholder="Your Name"
            />
          </div>

          <div className="d-flex form-outline align-items-center mb-3">
            <i className="fa fa-envelope me-2 pe-1"></i>
            <input
              type="email"
              id="loginEmail"
              className="form-control"
              placeholder="Your Email"
            />
          </div>

          <div className="d-flex form-outline align-items-center mb-3">
            <i className="fa fa-lock me-2 pe-2"></i>
            <input
              type="password"
              id="loginPassword"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>

          <div className="d-flex form-outline align-items-center mb-3">
            <i className="fa fa-key me-2 pe-1"></i>
            <input
              type="password"
              id="ConfirmPassword"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>

          <div className="form-check d-flex justify-content-center mb-5">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form2Example3c"
            />
            <label className="form-check-label" htmlFor="form2Example3">
              I agree all statements in <NavLink to="#!">Terms of service</NavLink>
            </label>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-5 mb-lg-4">
            <button type="button" className="btn btn-primary btn-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
