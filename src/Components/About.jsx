import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                  <h2>Meet Our Team</h2>
                  <p></p>
                </div>
            </div>
        </div>
    
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Manuella Nevoresky</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Samuel Hardy</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Tom Sunderland</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">John Tarly</h5>
              <span className="small text-uppercase text-muted">CEO - Founder</span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
