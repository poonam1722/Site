import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="container-fluid footer  ">
      <div className="col-10 mx-auto pt-5">
        <div className="row">
          <div className="col-md">
            <h3 className="pb-5 mb-5">Logo</h3>
            <p className="fh">Social Media</p>
          </div>

          <div className="col-md">
            <h3 className="fh">Company</h3>
            <ul className="list">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-md">
            <h3 className="fh">Product</h3>
            <ul className="list">
              <li>Our logistics</li>
              <li>Our Applications</li>
              <li>Downloada</li>
              <li>Distributor Login</li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="fh ">
              Get the latest updates in your inbox<br></br>
              <p className="list mt-2 mb-3">
                Stay up to date! get all the latest posts deliverd straight to
                your inbox.
              </p>
              <p className="list">Dont worry we hate spam too.</p>
            </p>
          </div>
        </div>
        <div>
          <div className="col-md">
            <p>Copyright@2020 we pvt ltd. All rights reserved</p>
          </div>
          <div className="offset-col-2 fl  col-md-2">
            <p>Press</p>
            <p>private Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
