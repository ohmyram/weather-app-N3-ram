import React from "react";
import useWeather from "../hooks/useWeather";

export const WeekTime = () => {
    const { weatherData, loading, error } = useWeather();

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
            <div className="flex-grow flex items-end justify-center mb-40">
                <div className=" responsive grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-4xl h-45">
                    {dailyForecasts.slice(0, 5).map((forecast, index) => (
                        <div key={index} className="bg-customSecondaryDark p-3 rounded-lg text-center w-102 h-144">
                            <p className="text-xs mb-1 py-4">{new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="weather icon" className="mx-auto mb-2 w-60 h-50" />
                            <p className="text-xs py-10"><span className="font-semibold">{Math.round(forecast.main.temp_max - 273.15)}°C</span> {Math.round(forecast.main.temp_min - 273.15)}°C</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
