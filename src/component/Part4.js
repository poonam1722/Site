import React from 'react';
import '../css/part4.css';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import Img from '../img/mob2.png';
function Part4() {
  return (
    <>
      <div className="container-fluid part4 desktop  ">
        <div className="col-10 mx-auto pt-5">
          <div className="row">
            <div className="head offset-md-3 col-md-6">
              <h1>Services we offer</h1>
              <p>
                where we connect local the business to profitable customers.
                where we connect local the business to profitable customers
              </p>
            </div>
          </div>

          <div className="row visible">
            <div className=" col-md-3">
              <GolfCourseIcon className="icon4 large" />
              <h4 className="pt-4">24/7 Visibility & Reports</h4>
              <p className="hide">
                we pride ourselves on the of transparency and with comunication
              </p>
            </div>
            <div className=" col-md-3">
              <GolfCourseIcon className="icon4 large" />
              <h4 className="pt-4">promt delivery</h4>
              <p className="hide">
                All products are delivered of the extremely quickly that your
                customers
              </p>
            </div>
            <div className=" col-md-3">
              {' '}
              <GolfCourseIcon className="icon4 large" />
              <h4 className="pt-4">Exception Management</h4>
              <p className="hide">
                In case of exceptions like heavy traffic or emergency at the
                breakdowns
              </p>
            </div>
            <div className=" col-md-3">
              {' '}
              <GolfCourseIcon className="icon4 large" />
              <h4 className="pt-4">Increasing efficiency</h4>
              <p className="hide">
                Our service improves the level of efficiency of healthcare
                logistics improves
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile part4">
        <div className="row">
          <div className="head offset-md-3 col-md-6">
            <h1 className="mt-3">Services we offer</h1>
            <p>
              where we connect local the business to profitable customers. where
              we connect local the business to profitable customers
            </p>
          </div>
        </div>
        <div className="l">
          <li>
            <GolfCourseIcon className="icon4 large" />
            24/7 Visibility & Reports
          </li>
          <li>
            <GolfCourseIcon className="icon4 large" />
            promt delivery
          </li>{' '}
          <li>
            <GolfCourseIcon className="icon4 large" />
            Exception Management
          </li>{' '}
          <li>
            <GolfCourseIcon className="icon4 large" />
            Increasing efficiency
          </li>
        </div>
      </div>

      <div className="container-fluid k">
        <div className="col-10 mx-auto pt-5 text">
          <div className="row">
            <div className="col-md-4">
              <div className="heading">
                <h1>Manage on the go</h1>
                <p className="download">
                  Download the our app now! and enjoy the offers and previlage!
                </p>
              </div>

              <div className="download">
                <br></br>
                Download App from{' '}
                <span>
                  <AppleIcon></AppleIcon>
                </span>{' '}
                <ShopIcon />
              </div>
              <div>
                <button className="btn">Download</button>
              </div>
            </div>
            <div className="offset-2 col-md-4 img">
              <img src={Img} className="lastimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Part4;
