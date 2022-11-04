import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import { useEffect } from "react";

const Main = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchText, setSearchText] = useState("Istanbul");
  const [error, setError] = useState("Enter a valid text");
  const [cityname, setCityName] = useState([]);

  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "tr";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

  useEffect(() => {
    getCity();
    setSearchText("");
  }, []);

  const getCity = async () => {
    try {
      if (searchText) {
        const { data } = await axios.get(url);
        setWeatherData([...weatherData, data]);
        console.log(data);
      }
    } catch (error) {
      setError("Invalid enter a text");
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError("Please enter a search text");
    } else {
      if (cityname.includes(searchText)) {
        setError(`You already entered a ${searchText}`);
      } else {
        getCity();
        setCityName([...cityname, searchText]);
      }
      setSearchText("");
      setTimeout(() => {
        setError("");
      }, 1000);
    }
    setTimeout(() => {
      setError("");
    }, 1000);
  };

  return (
    <section className="main">
      <form onSubmit={handlerSubmit}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          placeholder="Search for a city"
          autoFocus
        />
        <button type="submit">SUBMIT</button>
        <span className="msg">{error}</span>
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
