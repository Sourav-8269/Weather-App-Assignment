import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "axios"
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.7127281&lon=-74.0060152&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    // axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=london&limit=5&units=metric&appid=19e5bb78eb85f21fbfcbcde9f026af1e`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Navbar/>
      {/* </header> */}
    </div>
  );
}

export default App;
