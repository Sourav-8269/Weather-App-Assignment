import React from 'react'
import CurrentWeather from './CurrentWeather'
import "../styles/home.css"

const Home = () => {
  return (
    <div id="container">
        <div id="content-left">
            <CurrentWeather/>
        </div>
    </div>
  )
}

export default Home