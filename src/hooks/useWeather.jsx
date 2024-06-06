import { useContext } from 'react';
import { WeatherContext } from './WeatherContext';


/*Hook personalizado para consumir los datos del clima.*/
const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};

export default useWeather;
