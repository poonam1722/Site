import React from 'react';
import '../css/part5.css';
import Img1 from '../img/forbes.png'
import Img2 from '../img/dc.png';
import Img3 from '../img/42.png';
import Img4 from '../img/mc.png';
import Img5 from '../img/ys.png';
function Part5() {
  return (
    <div className="container-fluid part5  ">
      <div className="col-10 mx-auto pt-5">
        <div className="row">
          <div className=" headd">
            <h1 className="mb-5">We in the News</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md wh">
            <img src={Img2} className="imgsize" /></div>
          <div className="col-md wh"> <img src={ Img1} className="imgsize"/></div>
          <div className="col-md wh"> <img src={ Img3} className="imgsize"/></div>
          <div className="col-md wh"> <img src={ Img4} className="imgsize"/></div>
                  <div className="col-md wh"> <div className="col-md five"><img src={ Img5} className="imgsize"/></div>
                  
                              </div>
                              </div>
      </div>
    </div>
  );
}

export default Part5;
