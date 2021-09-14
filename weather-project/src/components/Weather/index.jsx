import React,  { useEffect } from 'react';
import {useWeatherData} from './useWeatherData';
import Precipitation from './Precipitation';

export default function Weather(props) {
    //go get weather data from API
    const weatherData = useWeatherData(props.city);
    let weather;
    let temp;
    let weatherCode;
    let isPrecipitation = false;
    const body = document.getElementsByTagName("body");
    if (weatherData !== null) {
      //pull needed weather information from the data retrieved from the API
      weather = weatherData["weather"][0]["main"];
      temp = Math.floor(weatherData["main"]["temp"]);
      weatherCode = weatherData["weather"][0]["id"];
    }
    if (
      weatherCode !== undefined && (
        /* Thunderstorm */ weatherCode.toString().startsWith("2") ||  
        /* Drizzle */ weatherCode.toString().startsWith("3") ||
        /* Rain */ weatherCode.toString().startsWith("5") ||
        /* Snow */ weatherCode.toString().startsWith("6")
        )
      ) {
        isPrecipitation = true;
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
      <>
      <div className="weather">
      {weatherData !== null
          ? <p>{temp}&deg;F and {weather}</p>
          : <p>Weather Unknown</p>
      }
      </div>
      {isPrecipitation &&
        <Precipitation />
      }
      </>
    )
  }