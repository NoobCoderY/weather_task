import React from 'react'
import Card2 from './Card2'
const Card3 = (weatherInfo) => {
  return (
    <div>
      { weatherInfo.map((i,index) => (
                     <div key={index}>
                      <Card2 min ={i.min} max={i.max} weatherType={i.weatherType} daytype={i.daytype} nighttype={i.nighttype}/>

                
                      </div>
             ))} 
    </div>
  )
}

export default Card3
