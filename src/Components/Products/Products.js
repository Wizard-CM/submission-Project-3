import React from "react";
import img1 from '../../Assets/img/head.png'
import img2 from '../../Assets/img/head2.png'

function Products() {
  return (
    <section id="products">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              Choose Your Wireless <br />
              <span className="primary-color">Headphones</span>
            </h2>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-3 mb-lg-0 shadow-lg">
            <div className="product-card text-center">
              <img
                src={img1}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Kids <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
            <div className="product-card text-center shadow-lg">
              <img
                src={img1}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Loud <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="product-card text-center shadow-lg">
              <img
                src={img1}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Loud <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="product-card text-center shadow-lg">
              <img
                src={img1}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Loud <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pt-lg-5">
            <div className="product-card text-center shadow-lg">
              <img
                src={img2}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Loud <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pt-lg-5">
            <div className="product-card text-center shadow-lg">
              <img
                src={img2}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Loud <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pt-lg-5">
            <div className="product-card text-center shadow-lg">
              <img
                src={img2}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Loud <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pt-lg-5">
            <div className="product-card text-center shadow-lg">
              <img
                src={img2}
                alt=""
                className="img-fluid"
              />
              <div className="stars pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <h5>
                Loud <span className="primary-color">Headphone</span>
              </h5>
              <p className="pb-5">Rs. 500.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
