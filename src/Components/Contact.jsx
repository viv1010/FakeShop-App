import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mb-6">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within NavLink matter of hours to
          help you.
        </p>

        <div className="row d-flex justify-content-center">
          <div className="col-md-6 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left mb-5">
              <a
                className="btn btn-primary"
              >
                Send
              </a>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
                <p>Mumbai, 410 987</p>
              </li>

              <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
                <p>+91 91010 91010</p>
              </li>

              <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>
                <p>contact@fakeshop.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
