import React from 'react'
import './part2.css'
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
function Part2() {
    return (
      <>
        <div className="container-fluid part2  ">
          <div className="row">
            <div className="col-10 mx-auto pt-5">
              <div className="row ">
                <div className="col-sm decide">
                  <h1 className="num">10k+</h1>
                  <p>Users became owner of their footprint</p>
                </div>
                <div className="col-sm decide">
                  {' '}
                  <h1 className="num">80%</h1>
                  <p>of your data puts you at the unnecessary risk</p>
                </div>
                <div className="col-sm decide">
                  {' '}
                  <h1 className="num">15k</h1>
                  <p className="b">Were are saved from a data breach of the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto  ">
              <div className="help">
                <h1>How we can help</h1>
                <p>
                  we connect the business to profitable customers. we connect
                  local the business to profitable customers.
                </p>
                <div className="greybox offset-sm-4 col-sm-4 ">
                  <div className="whitebox py-2">
                    <h3 className="dis">
                      <AddToQueueIcon className="iconpad" />
                      {''}Distributor
                    </h3>
                  </div>
                  <div className="phar">
                    <LocalPharmacyIcon className="iconpad" />
                    Pharmacist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Part2
