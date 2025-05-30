import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready: false});
    const[city, setCity]=useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            city: response.data.city,
            temperature: response.data.temperature.current, 
            wind:response.data.wind.speed, description:response.data.condition.description, 
            humidity:response.data.temperature.humidity,
            icon:response.data.condition.icon_url,
            date: new Date (response.data.time*1000)
        });
    }

    function search(){
        const apiKey = "2f43379oac5f7ffe8tde5aff442f0cdb"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
        
    }



    if (weatherData.ready){
        return(
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
    
                    <input type="Search" placeholder="Enter a city..." className="form-control" autoFocus="on"
                    onChange={handleCityChange}/> 
                    </div>
                    <div className="col-3">
                    <input type="Submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
                <WeatherForecast data={weatherData}/>
                
                 </div>
        );

    } else{
        search();
        return("Loading...");
    }

    
}