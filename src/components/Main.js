import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import { useEffect } from "react";

const Main = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchText, setSearchText] = useState("ankara");
  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () => {
    const { data } = await axios.get(url);
    setWeatherData([...weatherData, data]);
    console.log(data);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    getCity();
  };

  return (
    <section className="main">
      <form onSubmit={handlerSubmit}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search for a city"
          autoFocus
        />
        <button type="submit">SUBMIT</button>
        {/* <span className="msg">error</span> */}
      </form>
      <div className="container">
        <ul className="cities">
          {weatherData.map((item, index) => {
            return <WeatherCard key={index} item={item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Main;
