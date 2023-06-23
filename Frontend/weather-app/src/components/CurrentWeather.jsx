import React, { useState } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import Sun from "./weatherIcons/01d.png";
import Moon from "./weatherIcons/01n.png";
import Sunny from "./weatherIcons/02d.png";
import { CalendarIcon } from "@chakra-ui/icons";
import "../styles/current.css";
import { useEffect } from "react";
import { currentWeather, getDate, getIcon, weatherForecast } from "./allApi";
const CurrentWeather = () => {
  const [weather,setWeather]=useState(null);
  const [name,setName]=useState("");
  const [main,setMain]=useState(null);
  const [today,setToday]=useState("");
  const [icon,setIcon]=useState("");
  const [forecast,setForecast]=useState(null);

  
  useEffect(() => {
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.7127281&lon=-74.0060152&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    // // axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    // .then((res)=>console.log(res))
    // .catch((err)=>console.log(err))
    // console.log(currentWeather())
    (currentWeather().then((res)=>{
      setName(res.data.name);
      setWeather(res.data.weather[0]);
      setMain(res.data.main)
      setToday(getDate(res.data.dt))
      setIcon(res.data.weather[0].icon);
      // document.getElementById("image").src=
    }));

    console.log(weatherForecast().then((res)=>{
      // console.log(res)
      setForecast(res)
    }));
    console.log(forecast)
    // console.log(name,weather,"weather")
  }, []);

  return (
    <div id="main">
      <section id="current-weather">
        <div id="card">
          <Text id="heading">Now</Text>
          <HStack id="wrapper">
            {main&&<p id="temperature">{Math.floor(main.temp)}&deg;c</p>}
            {icon&&<img src={getIcon(icon)} alt="Sun" />}
            {!icon&&<img src={Sun} alt="Sun" />}
          </HStack>
          {weather&&<Text>{weather.description.charAt(0).toUpperCase()+weather.description.slice(1)}</Text>}
          <hr />
          <HStack style={{ textAlign: "left", marginLeft: "3px" }}>
            <CalendarIcon />
            {/* <Text>Thursday 16, Feb</Text> */}
            {today&&<Text>{today}</Text>}
          </HStack>
          <HStack style={{ textAlign: "left" }}>
            <IoLocationOutline color="#fff" size={23} />
            {name&&<Text>{name}</Text>}
          </HStack>
        </div>
      </section>
      <section id="forecast">
        <Text id="heading">5 Days Forecast</Text>
        {forecast&&<div id="card">
          {forecast.map((el,index)=>(
            // {console.log(el)}
             <HStack id="wrapper" key={index}>
             <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
               <img src={getIcon(el.weatherConditions.icon)} alt="Sun" width={36} height={36} />
               <p>{Math.floor(el.temperature)}&deg;c</p>
             </Box>
             <p>{el.day[0]+" "+el.day[1]}</p>
             <p>{el.day[2]}</p>
           </HStack>
          ))}
          <HStack id="wrapper">
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={Moon} alt="Sun" width={36} height={36} />
              <p>25&deg;c</p>
            </Box>
            <p>2 March</p>
            <p>Friday</p>
          </HStack>
          <HStack id="wrapper">
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={Moon} alt="Sun" width={36} height={36} />
              <p>25&deg;c</p>
            </Box>
            <p>2 March</p>
            <p>Friday</p>
          </HStack>
          <HStack id="wrapper">
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={Moon} alt="Sun" width={36} height={36} />
              <p>25&deg;c</p>
            </Box>
            <p>2 March</p>
            <p>Friday</p>
          </HStack>
          <HStack id="wrapper">
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={Moon} alt="Sun" width={36} height={36} />
              <p>25&deg;c</p>
            </Box>
            <p>2 March</p>
            <p>Friday</p>
          </HStack>
          <HStack id="wrapper">
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={Moon} alt="Sun" width={36} height={36} />
              <p>25&deg;c</p>
            </Box>
            <p>2 March</p>
            <p>Friday</p>
          </HStack>
        </div>}
      </section>
    </div>
  );
};

export default CurrentWeather;
