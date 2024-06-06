import React from 'react';

function SearchModal({ isModalOpen, toggleModal, location, setLocation, handleSearch, handleQuickSearch }) {
    const handleSearchButtonClick = () => {
        handleSearch();
    };

    const handleLocationButtonClick = (city) => {
        handleQuickSearch(city);
    };

    const handleLocationInputChange = (e) => {
        setLocation(e.target.value);
    };

    return (
        <>
            <div className={`fixed top-0 left-0 h-full w-[375px] bg-[#1E213A] text-white transition-transform duration-300 ease-in-out transform ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button className="absolute top-4 right-4 text-white text-3xl p-2 hover:bg-gray-700 rounded-full" onClick={toggleModal}>×</button>

                <div className="p-6 pt-12">
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="search location"
                            className="w-full py-3 px-12 rounded-md bg-[#2D3748] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={location}
                            onChange={handleLocationInputChange} />

                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3C47F5] text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            onClick={handleSearchButtonClick}>
                            Search
                        </button>
                    </div>

                    <div className="space-y-4">
                        <button onClick={() => handleLocationButtonClick('london')} className="w-full py-4 px-6 bg-[#2D3748] hover:bg-gray-700 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            London</button>
                        <button onClick={() => handleLocationButtonClick('barcelona')} className="w-full py-4 px-6 bg-[#2D3748] hover:bg-gray-700 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Barcelona</button>
                        <button onClick={() => handleLocationButtonClick('long beach')} className="w-full py-4 px-6 bg-[#2D3748] hover:bg-gray-700 rounded-md text-left text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Long Beach</button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default SearchModal;
