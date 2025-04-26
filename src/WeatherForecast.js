import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let[loaded, setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null);

    useEffect(()=> {
        setLoaded(false);
    },[props.data.city]
    );
    
    
    function displayForecast(response){
       setForecast(response.data.daily);
       //setCity(response.data.city);
       setLoaded(true);

    }

    function loadForecast(){
        let apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb";
        let city = props.data.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(displayForecast);
    }


    if (loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                        if (index<6){
                        return(<div className="col" key={index}>
                       <WeatherForecastDay data={dailyForecast}/>
                       </div>);
                    } else{
                        return null;}
                    })}
                </div>
            </div>
        );
     
    } else{
        loadForecast();
        
        return null;
    }}