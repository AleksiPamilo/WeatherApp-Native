import { ApiKey } from "../config.json";

export const fetchData = async (country: string) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${ApiKey}&units=metric`
    );
    const data = await response.json();
    return data;
}
