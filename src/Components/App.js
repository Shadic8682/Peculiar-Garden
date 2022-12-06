import logo from '../logo.svg';
import '../App.css';
import React, {useEffect} from "react";

const firstEndPoint = "http://localhost:9292/"

function App() {
  
  useEffect(() =>  {
   fetch(firstEndPoint)
   .then((response) => response.json())
   .then((data) => console.log(data))
  },
  [])

  return (
    <div>
      <header>
      </header>
    </div>
  );
}

export default App;
