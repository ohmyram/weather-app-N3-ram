import React, { useState } from 'react';
import useWeather from '../hooks/useWeather';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useState('');
    const { fetchWeather } = useWeather();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    /*Utilizo el fetchWeather de la api para buscar ubicaciones. */
    const handleSearch = () => {
        if (location.toLowerCase() === 'london') {
            fetchWeather(51.5074, -0.1278);
        } else if (location.toLowerCase() === 'barcelona') {
            fetchWeather(41.3851, 2.1734);
        } else if (location.toLowerCase() === 'long beach') {
            fetchWeather(33.7701, -118.1937);
        } else {
            alert('Location not found');
        }
        toggleSidebar();
    };

    return (
        <>
            <div className={`fixed top-0 left-0 h-full w-[450px] bg-customSecondaryDark text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
                <button className="absolute top-4 right-4 text-white text-3xl" onClick={toggleSidebar}>×</button>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="search location"
                        className="w-full p-2 mb-4 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)} />
                    <button className="w-full p-2 mb-4 bg-blue-600 rounded hover:bg-blue-700" onClick={handleSearch}>
                        Search</button>

                    <a href="#" className="p-2 bg-customSecondaryDark rounded cursor-pointer border border-customGray">
                        London</a>
                    <a href="#" className="p-2 bg-customSecondaryDark rounded cursor-pointer border border-customGray">
                        Barcelona</a>
                    <a href="#" className="p-2 bg-customSecondaryDark rounded cursor-pointer border border-customGray">
                        Long Beach</a>
                </div>
            </div>
            {/* Botón para abrir el modal */}
            <div className="flex h-screen w-[450px] bg-customSecondaryDark">
                <div className="flex-grow bg-customSecondaryDark">
                    <button className="m-4 p-2 bg-customgraytwo text-customtextW rounded" onClick={toggleSidebar}>Search for places</button>
                    <img
                        src="/public/Cloud-background.png"
                        alt="Cloud Background"
                        className="w-3/4 h-auto opacity-30 object-contain mix-blend-screen mx-auto"
                    />
                </div>
            </div>
        </>
    );
}

export default Modal;
