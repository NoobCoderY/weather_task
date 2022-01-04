import React from 'react'
import './card.css'
import img1 from '../image/sun-removebg-preview.png'

const Card = () => {
    return (
        <div>
            <div class="wrapper">
                
  <div class="widget-container">
    <div class="top-left">
      <h2 class="city" id="city">Weather Widget App</h2>
      <h3 id="day">Day</h3>
      <h5 id="date">Month, Day Year</h5>
      <h5 id="time">Time</h5>

      <p class="geo"></p>
    </div>
    <div class="top-right">
      <h1 id="weather-status">Weather / Weather Status</h1>
      <img class="weather-icon" src={img1}/>
    </div>
    <div class="horizontal-half-divider"></div>
    <div class="bottom-left">
      <h1 id="temperature">0</h1>
      <h2 id="celsius">&degC</h2>
      <h2 id="temp-divider">/</h2>
      <h2 id="fahrenheit">&degF</h2>
    </div>
    <div class="vertical-half-divider"></div>
    <div class="bottom-right">
      <div class="other-details-key">
        
        <p>Humidity</p>
        
        <p>Sunrise Time</p>
        <p>Sunset Time</p>
      </div>
      <div class="other-details-values">
       
        <p class="humidity">0 %</p>
        
        <p class="sunrise-time">0:00 am</p>
        <p class="sunset-time">0:00 pm</p>
      </div>
    </div>
  </div>
 
</div>
        </div>
    )
}

export default Card
