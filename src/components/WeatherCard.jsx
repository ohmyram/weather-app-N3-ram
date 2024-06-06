import React from 'react';

function WeatherCard({ weatherData, toggleModal }) {
    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full max-w-[375px] mx-auto bg-[#1E213A] p-6 transition-transform duration-300 ease-in-out transform translate-x-0">
                {/* Search Button */}

                <div className="flex justify-between items-center mb-10">
                    <button
                        className="py-2 px-4 bg-[#6E707A] text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={toggleModal}
                    >
                        Search for places
                    </button>
                    <button className="p-3 bg-[#6E707A] text-white rounded-full hover:bg-gray-600">
                        &#8635;
                    </button>
                </div>

                <div className="relative text-center mb-12">
                    <img src="/public/Cloud-background.png" alt="Cloud Background" className="w-full h-[300px] absolute left-0 top-0 opacity-20 object-contain" />
                    <div className="relative z-10 pt-8 inline-block bg-[#293251] rounded-full p-8">
                        <div className=" rounded-full w-16 h-16 inline-block shadow-lg"></div>
                        <div cl></div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <div className="text-[144px] font-light leading-none">
                        {weatherData?.temperature || '--'}<span className="text-5xl font-normal text-[#A09FB1] align-top ml-2">°C</span>
                    </div>
                    <div className="text-[#A09FB1] text-4xl mt-6">{weatherData?.condition || 'N/A'}</div>
                </div>

                <div className="text-[#88869D] text-center">
                    <div className="mb-4">Today • Mon, 3 Jun</div>
                    <div className="flex items-center justify-center">
                        <span className="material-icons mr-2">location_on</span>
                        {weatherData?.location || 'Select a location'}
                    </div>
                </div>
            </div>

        </>

    );
}

export default WeatherCard;
