import React from "react";
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>
        <form>
          <div className="text-center mb-3 mt-4">
            <p>Sign in with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fa fa-google" aria-hidden="true"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </button>
          </div>

          <p className="text-center">or:</p>

          <div className="d-flex form-outline align-items-center mb-3">
          <i className="fa fa-envelope me-2 pe-1"></i>
            <input
              type="email"
              id="loginName"
              className="form-control"
              placeholder="Email or Username"
            />
          </div>

          <div className="d-flex form-outline align-items-center mb-3">
          <i className="fa fa-lock me-2 pe-2"></i>
            <input
              type="password"
              id="loginPassword"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="col-md-12 d-flex justify-content-center">
            <NavLink to="#!">Forgot password?</NavLink>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-4" id="btn2">
            Sign in
          </button>

          <div className="text-center mb-5">
            <p>
              Not NavLink member? <NavLink to="/Register">Register</NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
