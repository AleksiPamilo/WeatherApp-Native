import { ApiKey } from "../config.json";

export const getWeather = async (city: string) => {
    const currentWeather = await getCurrentWeatherData(city);
    const forecastWeather = await getForecastWeatherData(
        currentWeather.coord.lat,
        currentWeather.coord.lon
    );

    return {
        currentWeather,
        forecastWeather
    }
};

export const getCurrentWeatherData = async (country: string) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${ApiKey}&units=metric`
    );
    const data = await response.json();
    return data;
};

export const getForecastWeatherData = async (lat: any, lon: any) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`
    );
    const data = await response.json();
    return data;
}
