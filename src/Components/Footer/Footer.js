import React from "react";

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 text-center text-md-start text-lg-start  ">
            <h3 className="py-4">Get to Know Us</h3>
            <ul>
              <li>Careers</li>
              <li>Investor Relations</li>
              <li>About </li>
              <li> Devices</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 text-center text-md-center text-lg-start">
            <h3 className="py-4">Follow Us</h3>
            <ul className="">
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitch"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4  text-center text-md-start text-lg-start ">
            <h3 className="py-4">Payment Methods</h3>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
