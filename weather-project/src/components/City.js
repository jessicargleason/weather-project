import React, { useState } from 'react';

export default function City() {
  const [city, setCity] = useState("Milwaukee");
  return (
    <>
    <h1>{city}</h1>
    <label for="city">City </label> 
    <input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} />
    </>
  )
}