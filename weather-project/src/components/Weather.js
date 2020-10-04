import React from 'react';
import {useWeatherData} from '../useWeatherData.js';

export default function Weather(props) {
    const weatherData = useWeatherData(props.city);
    let weather;
    let temp;
    if (weatherData !== null) {
      weather = weatherData["weather"][0]["main"];
      temp = Math.floor(weatherData["main"]["temp"]);
    }
    return (
      <>
      {weatherData !== null &&
          <p>{temp}&deg;F and {weather}</p>
      }
      </>
    )
  }