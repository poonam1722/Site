import React from 'react';
import {} from 'react-bootstrap';
import '../component/part1.css';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import Carousel from 'react-bootstrap/Carousel';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Old4 from '../img/old.jpg';
import Old1 from '../img/old2.jpg';
import Old2 from '../img/old3.jpg';

function Part1() {
  return (
    <section className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row part1">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-sm-4 ">
                <div className="heading ">
                  <h1 className="mob">Simplifying</h1>
                  <h1>healthcare logistics</h1>
                  <p>
                    We help to ease your healthcare logistics woes, especially
                    to remote and weather stricken places.
                  </p>
                </div>
                <div>
                  <button className="btn">Schedule A Demo</button>
                </div>
                <div className="download">
                  <hr></hr>
                  Download App from{' '}
                  <span>
                    <AppleIcon>
                      <a href="https://www.w3schools.com/css/css_align.asp" />
                    </AppleIcon>
                    <ShopIcon>
                      <a href="#" />
                    </ShopIcon>
                  </span>{' '}
                </div>
              </div>

              <div className="col-sm-8  haeding-par">
                <div className="box">
                  <Carousel>
                    <Carousel.Item>
                      <img className="d-block " src={Old4} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block " src={Old2} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="d-block " src={Old1} alt="Third slide" />
                    </Carousel.Item>
                  </Carousel>
                  <div className="quote">
                    <FormatQuoteIcon className="quotecolor" />
                    <p>We felt like we could'nt grow until we moved to biddano. Now
                    we are encouraged to sell with them</p>
                    <br></br>
                    <p className="zig">-Medplus stores</p>
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

export default Part1;
