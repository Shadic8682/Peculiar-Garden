
import React, {useEffect} from "react";
// import logo from '../Assets/Logos/logo.svg';
import '../Stylesheets/App.css';

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
