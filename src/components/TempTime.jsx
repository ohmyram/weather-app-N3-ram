import React, { useContext } from 'react';
import { WeatherContext } from '../hooks/WeatherContext';

export const TempTime = () => {
    const { weatherData, loading, error } = useContext(WeatherContext);

    if (loading) return
    <div>Loading...</div>;
    if (error) return
    <div>Error: {error} </div>;

    const currentWeather = weatherData.list[0];

    return (
        /*Aqui consumo los datos del clima para mostrar el clima actual detalladamente*/
        <>
            <div className="flex flex-col items-center ">
                <h2 style={{ marginRight: "500px" }} className="text-2xl font-medium mb-8">Today's Highlights</h2>

                <div className="grid grid-cols-2 gap-6 max-w-[700px] w-full">
                    <div className="bg-customSecondaryDark p-6 rounded-md text-center">
                        <p className="text-lg mb-2">Wind status</p>
                        <p className="text-4xl font-bold mb-2">{currentWeather.wind.speed}<span className="text-2xl font-normal"> mph</span></p>
                        <p className="flex items-center justify-center mt-4">
                            <span className="material-icons mr-1">navigation</span>
                            {currentWeather.wind.deg}°
                        </p>
                    </div>

                    <div className="bg-customSecondaryDark p-6 rounded-md text-center">
                        <p className="text-lg mb-2">Humidity</p>
                        <p className="text-4xl font-bold mb-2">{currentWeather.main.humidity}<span className="text-2xl font-normal">%</span></p>
                        <div className="flex flex-col items-center mt-4">
                            <div className="flex justify-between w-full mb-2">
                                <span>0</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                                <div className="bg-customYell h-2 rounded-full" style={{ width: `${currentWeather.main.humidity}%` }}></div>
                            </div>
                            <span className="self-end mt-1">%</span>
                        </div>
                    </div>

                    <div className="bg-customSecondaryDark p-6 rounded-md text-center">
                        <p className="text-lg mb-2">Visibility</p>
                        <p className="text-4xl font-bold mb-2">{(currentWeather.visibility / 1609.344).toFixed(1)}<span className="text-2xl font-normal"> miles</span></p>
                    </div>

                    <div className="bg-customSecondaryDark p-6 rounded-md text-center">
                        <p className="text-lg mb-2">Air Pressure</p>
                        <p className="text-4xl font-bold mb-2">{currentWeather.main.pressure}<span className="text-2xl font-normal"> mb</span></p>
                    </div>
                </div>

                <p className="text-center mt-12 text-[#88869D]">
                    created by <span className="font-bold">username</span> - devChallenges.io
                </p>
            </div>
        </>

    );
}
