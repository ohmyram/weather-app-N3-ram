import React, { useContext } from 'react';
import { WeatherContext } from '../hooks/WeatherContext';

export const WeekTime = () => {
    const { weatherData, loading, error } = useContext(WeatherContext);

    if (loading) return
    <div>Loading...</div>;
    if (error) return
    <div>Error: {error}</div>;

    /* Para obtener pronóstico diario */
    const dailyForecasts = weatherData.list.filter(forecast =>
        forecast.dt_txt.includes("12:00:00"));

    return (
        /* Consumo los datos del clima para mostrar el pronóstico semanal. */
        <>
            <div className="responsive grid lg:grid-cols-5  w-full max-w-4xl mx-auto">
                {dailyForecasts.slice(0, 5).map((forecast, index) => (
                    <div key={index} className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
                        <p className="text-xs mb-1 py-4">{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
                        <p className="text-xs py-10"><span className="font-semibold">{Math.round(forecast.main.temp_max - 273.15)}°C</span> {Math.round(forecast.main.temp_min - 273.15)}°C</p>
                    </div>
                ))}
                <button className="absolute bg-white text-black p-2 rounded-full" style={{ width: '40px', height: '40px', top: '62px', right: '150px', borderRadius: '50%' }}>°C</button>
                <button className="absolute bg-gray-700 text-white p-2 rounded-full" style={{ width: '40px', height: '40px', top: '62px', right: '100px', borderRadius: '50%' }}>°F</button>
            </div>

        </>
    );
};
