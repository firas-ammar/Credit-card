import React from "react";
import puce from "./puce.png";
import mastercard from "./visa.png";

function Card() {
  return (
    <div className="container">
      <h1>CREDIT CARDS</h1>
      <div className="card-info">
        <div className="info">
          <img id="pus" src={puce} alt="puce" />
          <h3>1542 0254 3520 0101 </h3>
          <p>
            3548
            <br />
            CARDHOLDER
          </p>
        </div>
        <div className='date-info'>
          <div className='valid-date'>
              <p>
                VALID
                <br />
                THRU 
              </p>
            <div className='date'>
              <center><p>MONTH/YEAR <br/><h2 style={{marginTop:'1%'}}>11/50</h2></p></center>
            
            </div>
          </div>
          <img id="log" src={mastercard} alt="logo" />
        </div>
      </div>
    </div>
  );
}
export default Card;
