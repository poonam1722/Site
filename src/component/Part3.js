import React from 'react';
import './part3.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Logistic from './Logistics'
import Img from '../img/web.png'
import Img1 from '../img/mob.png'
function Part3() {
  return (
    <>
      <section className="d-flex align-items-center">
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-10 ">
              <div className="row">
                <div className="offset-md-1 col-md-4">
                  <Logistic/>

                  <div className="btnlog offset-1">
                    <button className="btn">Know More</button>
                    <p className="log ml-3 mr-2 mb-2">
                      Distributors login here <ExitToAppIcon />
                    </p>
                  </div>
                </div>
                <div className="offset-md-1 col-md-6 imgri">
                  <img src={Img} className="right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex align-items-center">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-10 ">
              <div className="row">
                <div className="offset-md-1 col-md-5 imilef">
                  <img src={Img1} className="left" />
                </div>
                <div className="offset-2 col-md-4 logri">
                  <Logistic />
                  <div className="btnlog offset-1 btni">
                    <button className="btn">Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Part3;
