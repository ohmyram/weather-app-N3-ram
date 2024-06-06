import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({ lat: 44.34, lon: 10.99 });
    const [city, setCity] = useState('');
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

    const fetchCityName = async (lat, lon) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4fb1791439bb5c0532cd93dd0cf907b2`);
            const data = await response.json();
            setCity(data.name);
        } catch (error) {
            console.error('Error fetching city name:', error);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    const searchLocation = (ubicacion) => {
        fetch(``)
            .then((response) => response.json())
            .then((data) => {
                if (data.coord) {
                    setLocation({ lat: data.coord.lat, lon: data.coord.lon });
                } else {
                    console.error('Location not found');
                }
            })
            .catch((error) => {
                console.error('Error searching location:', error);
            });
    };

    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);
    const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);



    useEffect(() => {
        fetchWeather(location.lat, location.lon);
        fetchCityName(location.lat, location.lon);
    }, [location]);

    return (
        <WeatherContext.Provider
            value={{
                weatherData,
                city,
                getLocation,
                kelvinToCelsius,
                kelvinToFahrenheit,
                searchLocation,
                loading,
                error,
            }}>
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider, WeatherContext };
