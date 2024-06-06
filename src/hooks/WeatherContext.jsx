import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const fetchWeather = async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4fb1791439bb5c0532cd93dd0cf907b2`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchWeather(44.34, 10.99);
    }, []);

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error, fetchWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
