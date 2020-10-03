import React, { useState, useRef } from 'react';

export default function City() {
  const [city, setCity] = useState("Milwaukee");
  const refInput = useRef(null);
  const onFormSubmit = () => {
      setCity(refInput.current.value);
  }
  return (
    <>
    <h1>{city}</h1>
    <form>
        <label htmlFor="city">City </label> 
        <input id="city" type="text" ref={refInput} />
        <button type="button" onClick={onFormSubmit}>Get Weather</button>
    </form>
    </>
  )
}