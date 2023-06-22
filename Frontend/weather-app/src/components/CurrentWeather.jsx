import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import Sun from "./weatherIcons/01d.png";
import Moon from "./weatherIcons/01n.png";
import { CalendarIcon } from "@chakra-ui/icons";
import "../styles/current.css";
const CurrentWeather = () => {
  return (
    <div id="main">
      <section id="current-weather">
        <div id="card">
          <Text id="heading">Now</Text>
          <HStack id="wrapper">
            <p id="temperature">25&deg;c</p>
            <img src={Sun} alt="Sun" />
          </HStack>
          <Text>Overcast Clouds</Text>
          <hr />
          <HStack style={{ textAlign: "left", marginLeft: "3px" }}>
            <CalendarIcon />
            <Text>Thursday 16, Feb</Text>
          </HStack>
          <HStack style={{ textAlign: "left" }}>
            <IoLocationOutline color="#fff" size={23} />
            <Text>London, GB</Text>
          </HStack>
        </div>
      </section>
      <section id="forecast">
        <Text id="heading">5 Days Forecast</Text>
        <div id="card">
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
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
