import React from 'react'
import '../css/logistics.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function Logistics() {
    return (
      <div className="logishead">
        <h2 className="pt-4 pb-3">Our logistics</h2>
        <p className=" pb-2">
          we are a marketplace where we connect locals to profitable customers.
        </p>
        <ul>
          <li>
            <CheckCircleOutlineIcon className="icon" />
            Easy and low-cost access to pharmacies and hospitals<br></br>
          </li>
          <li>
            <CheckCircleOutlineIcon className="icon" />
            Transparent and efficient system for expired drugs management
            <br></br>
          </li>
          <li>
            <CheckCircleOutlineIcon className="icon" />
            Fater and reliable delivery support<br></br>
          </li>
        </ul>
      </div>
    );
}

export default Logistics
