import React, { useState } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import Sun from "./weatherIcons/01d.png";
import { CalendarIcon } from "@chakra-ui/icons";
import "../styles/current.css";
import { useEffect } from "react";
import {getDate, getIcon, getWeatherBySearch, weatherForecast,currentWeather } from "./allApi";

const CurrentWeather = ({userInput}) => {
  const [weather,setWeather]=useState(null);
  const [name,setName]=useState("");
  const [main,setMain]=useState(null);
  const [today,setToday]=useState("");
  const [icon,setIcon]=useState("");
  const [forecast,setForecast]=useState(null);
  const [loading,setLoading]=useState(true)
  
  useEffect(() => {

    if(!userInput){
      (currentWeather().then((res)=>{
        setLoading(false)
        setName(res.data.name);
        setWeather(res.data.weather[0]);
        setMain(res.data.main)
        setToday(getDate(res.data.dt))
        setIcon(res.data.weather[0].icon);
      })
      .catch((err)=>{
        setLoading(true)
      })
      );
    }

    (weatherForecast(userInput).then((res)=>{
      setForecast(res)
    }));

    if(userInput){
      (getWeatherBySearch(userInput).then((res)=>{
        setLoading(false)
        setName(res.data.name);
        setWeather(res.data.weather[0]);
        setMain(res.data.main)
        setToday(getDate(res.data.dt))
        setIcon(res.data.weather[0].icon);
      })
      .catch((err)=>{
        setLoading(true)
      }));
    }
  }, [userInput]);

  // Condition for error handling

  if(loading){
    return <div>
        <div id="error">
          <img src="https://i.ibb.co/zHKyM5v/404.png" alt="404 Not Found" />
        <Text fontSize="30px" textAlign="center">No Location Found</Text>
        </div>
      </div>
  }

  return (
    <div id="main">
      <section id="current-weather">
        <div id="card">
          <Text id="heading">Now</Text>
          <HStack id="wrapper">
            {main&&<p id="temperature">{Math.round(main.temp)}&deg;c</p>}
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
             <HStack id="wrapper" key={index}>
             <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
               <img src={getIcon(el.weatherConditions.icon)} alt="Sun" width={46} height={46} />
               <p>{Math.round(el.temperature)}&deg;c</p>
             </Box>
             <p>{el.day[0]+" "+el.day[1]}</p>
             <p>{el.day[2]}</p>
           </HStack>
          ))}
        </div>}
      </section>
    </div>
  );
};

export default CurrentWeather;
