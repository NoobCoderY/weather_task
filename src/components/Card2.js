import React from "react";
import "./card2.css";
import img1 from "../image/sun-removebg-preview.png";

const Card2 = (props) => {
  return (
    <div>
      <div className="card-box">
        <div className="card-design card1">
          <div class="top-left">
            <h2 class="city" id="city">
              Weather Widget App
            </h2>
            <h3 id="day">{props.day}</h3>
            <h3 id="date">January, 2022</h3>
            

            <p class="geo"></p>
          </div>
          <div class="top-right">
            <h1 id="weather-status">{props?.weatherType}</h1>
            <img class="weather-icon" src={img1} />
          </div>
        </div>
        <div className="card-design card2">
        
          
          <h2 id="celsius">{props?.min}°C</h2>
          <h2 id="temp-divider">/</h2>
          <h2 id="fahrenheit">{props?.max}°C</h2>
          
        </div>
        <div className="card-design card3">
          <div class="other-details-key">
            <p>Humidity - </p>

            <p>Day-Type - </p>
            <p>Night_Type - </p>
          </div>
          <div class="other-details-values">
            <p class="humidity">40 %</p>

            <p class="sunrise-time">{props?.daytype}</p>
            <p class="sunset-time">{props?.nighttype}</p>
          </div>
        </div>
        {/* <div className='card-design card4'>lorem sipsum</div> */}
      </div>
    </div>
  );
};

export default Card2;
