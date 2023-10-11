import React from "react";

function contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-center pb-5">Contact Us</h2>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-lg-5 col-md-5 text-center text-md-start">
            <h3 className="fw-bold pb-5">Contact Info</h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-3 mb-3 justify-content-center justify-content-md-start ">
                <span>
                  <i className="fa-solid fa-location-crosshairs"></i>
                </span>
                <p className="m-0">Samakhusi, Kathmandu</p>
              </li>
              <li className="d-flex align-items-center gap-3 mb-3 justify-content-center justify-content-md-start ">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p className="m-0">977+ 2282822828288</p>
              </li>
              <li className="d-flex align-items-center gap-3 mb-3 justify-content-center justify-content-md-start  pb-4 pb-md-0">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p className="m-0">ronakhero@hotmail.com</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 col-md-7">
            <form action="">
              <div className="row">
                <div className="col-md-6  pb-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control  py-4 px-3"
                      placeholder="...Enter Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 pb-4">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control py-4 px-3"
                      placeholder="...Enter Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      className="textarea p-4"
                      cols="30"
                      rows="4"
                      placeholder="...Enter Details"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="main-btn">
                    <span>
                      <i className="fa-solid fa-rocket pe-3"></i>
                    </span>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
