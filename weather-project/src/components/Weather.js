import React,  { useEffect } from 'react';
import {useWeatherData} from '../useWeatherData.js';

export default function Weather(props) {
    //go get weather data from API
    const weatherData = useWeatherData(props.city);
    let weather;
    let temp;
    let weatherCode;
    const body = document.getElementsByTagName("body");
    if (weatherData !== null) {
      //pull needed weather information from the data retrieved from the API
      weather = weatherData["weather"][0]["main"];
      temp = Math.floor(weatherData["main"]["temp"]);
      weatherCode = weatherData["weather"][0]["id"];
    }
    useEffect(() => {
        // Update the document title
        document.title = `${props.city} Weather`;
        //Set the numerical weather code as the body class for styling
        if (weatherCode !== undefined) {
            body[0].setAttribute("data-weather",weatherCode);
        } else {
          body[0].setAttribute("data-weather","");
        }
      });
    return (
      <div className="weather">
      {weatherData !== null
          ? <p>{temp}&deg;F and {weather}</p>
          : <p>Weather Unknown</p>
      }
      </div>
    )
  }