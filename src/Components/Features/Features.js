import React from "react";
import leftImg from '../../Assets/img/head.png'
import img1 from '../../Assets/img/noise.png'
import img2 from '../../Assets/img/wifi.png'
import img3 from '../../Assets/img/sound.png'
import img4 from '../../Assets/img/bluetooth.png'

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-6">
            <div className="img-text text-center text-md-start py-3">
              <h2>
                Best HeadPhone <br />
                <span className="primary-color">Ever.</span>
              </h2>
            </div>
            <div className="text-center text-md-start">
              <img
                src={leftImg}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6  col-lg-6">
            <div className="row">
              <div className="col-lg-6 text-center text-md-start pt-5 pt-md-0 ">
                <div className="features-text">
                  <div className="feature-img">
                    <img
                      src={img4}
                      alt=""
                      className="shadow bluetooth "
                    />
                  </div>
                  <div className="feature-description">
                    <h5 className="pt-5">WireLess</h5>
                    <p className="pb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cupiditate aut modi cum enim libero rerum nihil quo
                      dignissimos dolorem fugiat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center text-md-start ">
                <div className="features-text">
                  <img
                    src={img1}
                    alt=""
                    className="shadow bluetooth"
                  />
                  <div className="feature-description">
                    <h5 className="pt-5">Zero Noise</h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cupiditate aut modi cum enim libero rerum nihil quo
                      dignissimos dolorem fugiat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-5 text-center text-md-start ">
                <div className="features-text">
                  <img
                    src={img2}
                    alt=""
                    className="shadow bluetooth"
                  />
                  <div className="feature-description">
                    <h5 className="pt-5">Fast WIFI</h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cupiditate aut modi cum enim libero rerum nihil quo
                      dignissimos dolorem fugiat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-5 text-center text-md-start ">
                <div className="features-text">
                  <img
                    src={img3}
                    alt=""
                    className="shadow bluetooth"
                  />
                  <div className="feature-description">
                    <h5 className="pt-5">Max Audio</h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Cupiditate aut modi cum enim libero rerum nihil quo
                      dignissimos dolorem fugiat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
