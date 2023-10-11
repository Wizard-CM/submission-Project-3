import React from 'react'

function MainProduct() {
  return (
    <section id="main-product">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="main-product-left">
            <img
              src="./images/img/pexels-garrett-morrow-1649771-removebg-preview.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 text-center text-md-start">
          <div className="main-product-text">
            <h2>Loud and Clear <br /> <span className="primary-color">Music</span></h2>
            <p className="py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi temporibus ullam quaerat voluptates cum asperiores
              natus! Ad nisi ut vitae quos ratione rem debitis magni fugit
              earum praesentium. Earum eveniet labore aut explicabo
              distinctio? Incidunt porro quasi rem cumque sunt, amet
              corporis natus praesentium atque, omnis ex? Maxime, dicta
              quaerat.
            </p>
          </div>
          <div><button className="main-btn">Buy Now</button></div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default MainProduct