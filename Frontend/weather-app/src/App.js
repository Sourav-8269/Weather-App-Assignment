import './App.css';
import {useEffect, useState} from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (input) => {
    setUserInput(input);
  };

  return (
    <div className="App">
        <Navbar onUserInput={handleUserInput}/>
        <Home userInput={userInput}/>
    </div>
  );
}

export default App;
