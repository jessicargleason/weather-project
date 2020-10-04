import React, { useState, useRef, useEffect } from 'react';
import Weather from "./Weather.js";

export default function City() {
  const [city, setCity] = useState("Milwaukee");
  const refInput = useRef(null);
  const onFormSubmit = (event) => {
      setCity(refInput.current.value);
      event.preventDefault();
  }
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${city} Weather`;
  },[city]);
  return (
    <>
    <h1>{city}</h1>
    <Weather city={city} />
    <form onSubmit={onFormSubmit}>
        <label htmlFor="city">City</label> 
        <input id="city" type="text" ref={refInput} />
        <button type="submit">Get Weather</button>
    </form>
    </>
  )
}