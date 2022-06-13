import { useState } from "react";
import DogImage from "./components/DogImage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const API_URL = "https://dog.ceo/api/breeds/image/random";

  // This is useState where we pass the initial state to this function and it returns a variable with the current state value
  const [dog, setDog] = useState(null);

  const getDog = async () => {
    const response = await fetch(API_URL);

    const data = await response.json();
    setDog(data.message);
  };

  return (
    <div className="app">
      <div className="title">Random Dog Generator</div>
      <div className="subtitle">Check out these adorable doggies.</div>
      <div className="submit">
        <input type="button" value="Get Random Dog" onClick={getDog} />
      </div>
      <div className="dogImg">
        <DogImage dog={dog} />
      </div>
    </div>
  );
}

export default App;
