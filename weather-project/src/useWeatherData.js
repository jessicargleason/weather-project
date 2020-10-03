import { useEffect, useState } from 'react';

export function useWeatherData(city) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        function handleWeatherChange(status) {
            setWeather(status);
        }

        fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => handleWeatherChange(data["weather"][0]["main"]));
    })

  return weather;
}