import React from 'react'
import CurrentWeather from './CurrentWeather'
import "../styles/home.css"

const Home = ({userInput}) => {
  return (
    <div id="container">
        <div id="content-left">
            <CurrentWeather userInput={userInput}/>
        </div>
    </div>
  )
}

export default Home