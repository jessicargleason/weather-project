import React, { useState, useRef, useEffect } from 'react';
import {useWeatherData} from '../useWeatherData.js';

export default function City() {
  const [city, setCity] = useState("Milwaukee");
  const weather = useWeatherData(city);
  const refInput = useRef(null);
  const onFormSubmit = (event) => {
      setCity(refInput.current.value);
      event.preventDefault();
  }
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${city} Weather`;
  });
  return (
    <>
    <h1>{city}</h1>
    <p>{weather}</p>
    <form onSubmit={onFormSubmit}>
        <label htmlFor="city">City</label> 
        <input id="city" type="text" ref={refInput} />
        <button type="submit">Get Weather</button>
    </form>
    </>
  )
}