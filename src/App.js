import { useState, useEffect } from "react";
import "./App.css";
import Country from "./Components/Country";

const REGION_API = "https://restcountries.eu/rest/v2/region/asia";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(REGION_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);

  return (
    <div className="App">
      {countries.map((country) => {
        const { numericCode } = country;
        return <Country {...country} key={numericCode} />;
      })}
    </div>
  );
}

export default App;
