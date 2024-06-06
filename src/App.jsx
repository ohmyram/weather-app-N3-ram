import React from "react";
import Modal from "./components/Modal";
import { Time } from "./components/Time";
import { WeatherProvider } from "./hooks/WeatherContext";

function App() {
  return (
    <>
      <WeatherProvider>
        
        <div className="min-h-screen flex flex-col md:flex-row bg-customDark text-white">
          <Modal />
          <Time />
        </div>

      </WeatherProvider>


    </>
  );
}

export default App;
