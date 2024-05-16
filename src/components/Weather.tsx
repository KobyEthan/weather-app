import { MainContainer } from "./styles.module";
import { IoSearchOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";
import React from "react";

interface WeatherDataTypes {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

const Weather = () => {
  const API_KEY = "0cc86d16bf572f78cdc96c096c7627e5";
  const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/";

  const [weatherData, setWeatherData] = React.useState<WeatherDataTypes | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState(false);

  const [searchCity, setSearchCity] = React.useState("");

  const fetchWeather = async (lat: number, lon: number) => {
    const url = `${API_ENDPOINT}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };

  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${API_ENDPOINT}weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);

      const searchResults: WeatherDataTypes = response.data;
      return { searchResults };
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      throw error;
    }
  };

  const handleSearch = async () => {
    if (searchCity.trim() === "") {
      return;
    }
    try {
      const { searchResults } = await fetchWeatherData(searchCity);
      setWeatherData(searchResults);
      console.log(searchResults);
    } catch (error) {
      console.error("No results found");
    }
  };

  const getIcon = (weather: string) => {
    let iconElement: React.ReactNode;
    let iconColor: string;

    switch (weather) {
      case "Rain":
        iconElement = <BsFillCloudRainFill />;
        iconColor = "#272829";
        break;
      case "Clear":
        iconElement = <BsFillSunFill />;
        iconColor = "#FFC436";
        break;
      case "Clouds":
        iconElement = <BsCloudyFill />;
        iconColor = "#102C57";
        break;
      case "Mist":
        iconElement = <BsCloudFog2Fill />;
        iconColor = "#279EFF";
        break;

      default:
        iconElement = <TiWeatherPartlySunny />;
        iconColor = "#7B2869";
    }

    return (
      <span className="icon" style={{ color: iconColor }}>
        {iconElement}
      </span>
    );
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      Promise.all([fetchWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          setIsLoading(true);
          setWeatherData(currentWeather);
        }
      );
    });
  }, []);

  return (
    <MainContainer>
      <div className="container">
        <div className="searchArea">
          <input
            type="text"
            placeholder="Please enter a city"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />

          <div className="search">
            <IoSearchOutline className="searchIcon" onClick={handleSearch} />
          </div>
        </div>

        {weatherData && isLoading ? (
          <>
            <div className="weatherContainer">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">{getIcon(weatherData.weather[0].main)}</div>
              <h2>{weatherData.weather[0].main}</h2>
              <h1 className="temp">{weatherData.main.temp}°C</h1>
              <p className="feel">
                Feels Like: {weatherData.main.feels_like}°C
              </p>
            </div>
            <div className="infoArea">
              <div className="humidity">
                <div className="info">
                  <WiHumidity className="infoIcon" />
                  <h1>{weatherData.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="wind">
                <div className="info">
                  <WiStrongWind className="infoIcon" />
                  <h1>{weatherData.wind.speed}km/hr</h1>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="loading">
            <RiLoaderFill className="loadingIcon" />
            <p>Loading</p>
          </div>
        )}
      </div>
    </MainContainer>
  );
};

export default Weather;
