import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
     const [weatherInfo,setWeatherInfo]=useState({
            city: "Delhi",
            feelsLike:14.28,
            humidity:82,
            temp:14.62,
            tempMin:14.62,
            tempMax:14.62,
            weather:"mist",
        });

        let updateInfo=(newInfo)=>{
          setWeatherInfo(newInfo);
        }
  
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br /><br />
            <InfoBox info={weatherInfo}/>
        </div>
        
    )
}