import React from "react";
import useWeather from "../hooks/useWeather";

export const TempTime = () => {
    const { weatherData, loading, error } = useWeather();

    if (loading) return
    <div>Loading...</div>;
    if (error) return
    <div>Error: {error} </div>;

    const currentWeather = weatherData.list[0];

    return (
        /*Aqui consumo los datos del clima para mostrar el clima actual detalladamente*/
        <>
            <h2 className="text-xl mb-4 items-center">Today's Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-customSecondaryDark p-4 rounded text-center">
                    <p>Wind status</p>
                    <p className="text-3xl">{currentWeather.wind.speed} mph</p>
                    <p>{currentWeather.wind.deg}°</p>
                </div>
                <div className="bg-customSecondaryDark p-4 w- rounded text-center">
                    <p>Humidity</p>
                    <p className="text-3xl">{currentWeather.main.humidity}%</p>
                    <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-zinc-700">
                        <div className="bg-customYell h-2.5 rounded-full" style={{ width: `${currentWeather.main.humidity}%` }}></div>
                    </div>
                </div>
                <div className="bg-customSecondaryDark p-4 rounded text-center">
                    <p>Visibility</p>
                    <p className="text-3xl">{(currentWeather.visibility / 1000).toFixed(1)} km</p>
                </div>
                <div className="bg-customSecondaryDark p-4 rounded text-center">
                    <p>Air Pressure</p>
                    <p className="text-3xl">{currentWeather.main.pressure} mb</p>
                </div>
            </div>

            <p className="text-center mt-8">
                created by <span className="text-blue-500">username</span> - devChallenges.io
            </p>
        </>
    );

};
