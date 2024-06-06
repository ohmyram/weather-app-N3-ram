import React, { useState, useContext } from 'react';
import WeatherCard from './WeatherCard';
import SearchModal from './SearchModal';
import { WeatherContext } from '../hooks/WeatherContext';

function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [location, setLocation] = useState('');
    const { fetchWeather, weatherData } = useContext(WeatherContext);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSearch = async () => {
        if (location.trim()) {
            await fetchWeather(location);
            setIsModalOpen(false);
        }
    };

    const handleQuickSearch = async (city) => {
        await fetchWeather(city);
        setIsModalOpen(false);
    };

    return (
        <>
            <div style={{ width: "459px" }} className="relative h-screen w-full bg-[#100E1D] text-white">
                <WeatherCard weatherData={weatherData} toggleModal={toggleModal} />
                <SearchModal
                    isModalOpen={isModalOpen}
                    toggleModal={toggleModal}
                    location={location}
                    setLocation={setLocation}
                    handleSearch={handleSearch}
                    handleQuickSearch={handleQuickSearch} />
            </div>
        </>
    );
}

export default Modal;
