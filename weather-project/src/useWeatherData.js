import { useEffect, useState } from 'react';

export function useWeatherData(city) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        function handleWeatherChange(weather) {
            setWeather(weather);
        }

        fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data["cod"] === 200) {
                handleWeatherChange(data);
            } else {
                handleWeatherChange(null);
            }
        });
    }, [city])

  return weather;
}