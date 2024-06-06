import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-customDark text-white">
        <Modal />

        <div className="w-full md:w-3/4 p-4 flex flex-col h-screen">
          <div className="flex-grow flex items-end justify-center mb-40">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-4xl h-45">
              <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
                <p className="text-xs mb-1">Tomorrow</p>
                <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
                <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
              </div>
              <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
                <p className="text-xs mb-1">Sun, 7 Jun</p>
                <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
                <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
              </div>
              <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
                <p className="text-xs mb-1">Mon, 8 Jun</p>
                <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
                <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
              </div>
              <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
                <p className="text-xs mb-1">Tue, 9 Jun</p>
                <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
                <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
              </div>
              <div className="bg-customSecondaryDark p-3 rounded-lg text-center w-32 h-44">
                <p className="text-xs mb-1">Wed, 10 Jun</p>
                <img src="https://placehold.co/50x50" alt="weather icon" className="mx-auto mb-2 w-10 h-10" />
                <p className="text-xs"><span className="font-semibold">16°C</span> 11°C</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl mb-4">Today's Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-customSecondaryDark p-4 rounded text-center ">
              <p>Wind status</p>
              <p className="text-3xl">7 mph</p>
              <p>WSW</p>
            </div>
            <div className="bg-customSecondaryDark p-4 w- rounded text-center">
              <p>Humidity</p>
              <p className="text-3xl">84%</p>
              <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-zinc-700">
                <div className="bg-customYell h-2.5 rounded-full" style={{ width: "84%" }}></div>
              </div>
            </div>
            <div className="bg-customSecondaryDark p-4 rounded text-center">
              <p>Visibility</p>
              <p className="text-3xl">6.4 miles</p>
            </div>
            <div className="bg-customSecondaryDark p-4 rounded text-center">
              <p>Air Pressure</p>
              <p className="text-3xl">998 mb</p>
            </div>
          </div>
          <p className="text-center mt-8">
            created by <span className="text-blue-500">username</span> - devChallenges.io
          </p>
        </div>
      </div>

    </>
  );
}

export default App;
