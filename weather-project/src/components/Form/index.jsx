import React, { useState, createRef, useEffect } from 'react';
import Weather from "../Weather";
import City from "./City";

export default function Form() {
  const [city, setCity] = useState("Milwaukee");
  const refInput = createRef();
  const onFormSubmit = (event) => {
    if (refInput.current.value !== "") {
      setCity(refInput.current.value);
    } else {
      alert("Please enter a city name");
    }
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
    <form onSubmit={onFormSubmit} className="city-form">
        <label htmlFor="city" className="city-search__label">City</label> 
        <City ref={refInput} />
        <button type="submit" className="city-search__submit">Get Weather</button>
    </form>
    </>
  )
}