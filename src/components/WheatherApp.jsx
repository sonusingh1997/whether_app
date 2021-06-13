import React, {useState } from "react";
import "./css/style.css";
import { WiHorizon } from "react-icons/wi";
import { BsFillXOctagonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

export const WheatherApp = () => {
  const [city, setCity] = useState("null");
  const [search, searchCity] = useState("London");

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log(search);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=30b8db0338896837e29d39f5f390bf29`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setCity(result.main);
    
  };
  


  return (
    <>
      <div className="box">
        <h1 className="headerr">Weather App </h1>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            onChange={(e) => searchCity(e.target.value)}
            value={search}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        {city ? (
          <div className="info">
            <br /> <br />
            <h2>{search}</h2>
            <h1>
              <WiHorizon className="SunIcon" />
              Temp :{city.temp}°C
            </h1>
            <br /> <br />
            <h3>
              Min : {city.temp_min}°C | Max : {city.temp_max}°C
            </h3>
            <br />
            <h3>Humidity : {city.humidity}%</h3>
            <br />
            
          </div>
        ) : (
            
          <p className="botton">
            <BsFillXOctagonFill />
            &nbsp;City Not Found
          </p>
        )}
      </div>
    </>
  );
};

