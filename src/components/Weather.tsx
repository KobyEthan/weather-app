import { MainContainer } from "./styles.module";
import { IoSearchOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

const Weather = () => {
  return (
    <MainContainer>
      <div className="container">
        <div className="searchArea">
          <input type="text" placeholder="Please enter a city" />

          <div className="searchCircle">
            <IoSearchOutline className="searchIcon" />
          </div>
        </div>

        <div className="weatherContainer">
          <h1>City</h1>
          <span>idk</span>
          <div className="icon">icon</div>
          <h1>95F</h1>
          <h2>Cloudy</h2>
        </div>
        <div className="infoArea">
          <div className="humidity">
            <WiHumidity className="icon" />
            <div className="info">
              <h1>60%</h1>
              <p>Humidity</p>
            </div>
          </div>

          <div className="wind">
            <WiStrongWind className="icon" />
            <div className="info">
              <h1>2.35km/hr</h1>
              <p>wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Weather;
