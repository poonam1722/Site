import React from 'react';
import './footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
  return (
    <>
      <div className="container-fluid footer desktop  ">
        <div className="col-10 mx-auto pt-5">
          <div className="row">
            <div className="col-md">
              <h3 className="pb-5 mb-5">Logo</h3>
              <p className="fh">Social Media</p>
              <FacebookIcon className="font mr-2 " />
              <InstagramIcon className="font mr-2" />
              <TwitterIcon className="font  mr-2" />
              <LinkedInIcon className="font mr-2" />
            </div>

            <div className="col-md">
              <h3 className="fh">Company</h3>
              <ul className="list ">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Carrers</li>
              </ul>
            </div>

            <div className="col-md">
              <h3 className="fh">Product</h3>
              <ul className="list">
                <li>Our logistics</li>
                <li>Our Applications</li>
                <li>Downloads</li>
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
                <div class="buttonIn">
                  <input
                    type="text"
                    className="ib"
                    id="enter"
                    placeholder="Email address"
                  />
                  <button id="clear">Subscribe</button>
                </div>
                <p className="list mt-2">Dont worry we hate spam too.</p>
              </p>
            </div>
          </div>
          <div>
            <div className="col-md">
              <p className="last mt-2">
                Copyright@2020 we pvt ltd. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer_mobile  ">
        <div className="col-10 mx-auto pt-5">
          <div className="row">
            <div className="col-md f">
              <h3 className="mr-3">Logo</h3>
              <FacebookIcon className="font " />
              <InstagramIcon className="font" />
              <TwitterIcon className="font" />
              <LinkedInIcon className="font" />
            </div>
            <hr></hr>

            <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
              <a className="navbar-brand" href="#">
                Company
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Carreers
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <hr></hr>

            <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
              <a className="navbar-brand" href="#">
                Product
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Our Logistics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Our Application
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Downloads
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Distributor Login
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <hr></hr>

            <div className="col-md-3">
              <p className="fh ">
                Get the latest updates in your inbox<br></br>
                <p className="list mt-2 mb-3">
                  Stay up to date! get all the latest posts deliverd straight to
                  your inbox.
                </p>
                <div class="buttonIn">
                  <input
                    type="text"
                    className="py-4 bb"
                    id="enter"
                    placeholder="Email address"
                  />
                  <button className="buttonl" id="clear">
                    Subscribe
                  </button>
                </div>
                <br></br>
                <p className="list">Dont worry we hate spam too.</p>
                <hr></hr>
                <p className="list">
                  Copyright@2020 we pvt ltd. All rights reserved
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
