import axios from "axios";
import React, { useState, useEffect } from "react";
import img1 from "../image/Vector (3).png";

import Card2 from "./Card2.js";
import "./maincard.css";
import img2 from '../image/cloudycon.png'

const Maincard = () => {
  const [weatherInfo, setweatherInfo] = useState();
  const [zipCode ,setZipCode]=useState('');
  
    
  
  
  

  const [locationKey , setLocationKey] = useState(` 152909_PC`);
  useEffect(() => {
    const daysOfWeek=[
      'Sunday',
      'Monday',
      'Tuesday',
      'Thursday',
      'Friday',
      'saturday'
  
    ]
    fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=%09JLAdCy5QGyvAZHJ2srzdNmoExwPdOFm7`
    )
      .then((res) => res.json())
     
      .then((res) =>
        setweatherInfo(
          res.DailyForecasts.map((df) => {
            return {
              min: df.Temperature.Minimum.Value,
              max: df.Temperature.Maximum.Value,
              weatherType: df.Day.IconPhrase,
              daytype: df.Day.IconPhrase,
              nighttype: df.Night.IconPhrase,
              dayOfweek:daysOfWeek[new Date (df.Date).getDay()],
            };
          })
        )
      );
  }, [locationKey]);

  console.log(weatherInfo)

   return(
    <div>
    <div>
      <div className="maincard">
        <div className="maincard1">
          <div className="search">
            <h5>ENTER LOCATION KEY</h5>
            <input type="search" id="textbox" 
            onChange={e=>setLocationKey(e.target.value)}></input>
            <div className="btn">
              <button className="butn" >ENTER</button>
            </div>
          </div>
          <div className="todaycard">
          <Card2 min={weatherInfo?weatherInfo[0].min:0} max={weatherInfo?weatherInfo[0].max:0} weatherType={weatherInfo?weatherInfo[0].weatherType:0}
             daytype={weatherInfo?weatherInfo[0].daytype:0}   nighttype={weatherInfo?weatherInfo[0].nighttype:0}
              day={weatherInfo?weatherInfo[0].dayOfweek:0 } className='yasshu'/>
          </div>
        </div>
        <div className="maincard2">
        {weatherInfo?.slice(1,5).map((el,index) => {
            return(
                <div >
                    <Card2 min={el?.min} max={el?.max} weatherType={el?.weatherType} daytype={el?.daytype} nighttype={el?.nighttype} 
                     day={el?.dayOfweek}
                     
                     />
                </div>
            )


        })}
        </div>
          

        
      </div>
    </div>
    </div>
  );
};

export default Maincard;
