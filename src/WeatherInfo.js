import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css"

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
            <h1> {props.data.city}</h1>
                <ul>
                    <li> <FormattedDate date={props.data.date}/>

                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                    <div className="row mt-3">
                        <div className="col-6">
                        
                            <img src={props.data.icon}alt={props.data.description} className="float-left"/>
                            <WeatherTemperature celsius={props.data.temperature}/>
                        </div>
                        <div className="col-6">
                            <ul>
                               
                                <li>
                                    Humidity: {props.data.humidity}%
                                </li>
                                <li>
                                    Wind:{props.data.wind} mph
                                </li>
    
                            </ul>
                        </div>
    
                    </div>
            
        </div>

    );
}