import { useEffect } from "react";
import Card from "./Components/Card";
import Input from "./Components/Input";
import Button from "./Components/Button";
import '../src/index.css'
import { useWeather } from "./context/Weather";
function App() {

  const weather = useWeather();

  useEffect(() => {
    // Get current location
    weather.fetchCurrentUserLocationData();
  },[]);
  
  return (
    <>
      <div className=" my-5 flex justify-center text-center sm:text-left md:text-right lg:text-center xl:text-left">
        <div>
          <h1 className=" text-purple-600 font-bold text-5xl ">Weather ForeCast</h1>
          <Input />
          <Button onClick={weather.fetchData} value="Search" />
          <Card/>
        </div>
      </div>
    </>
  );
}

export default App;
