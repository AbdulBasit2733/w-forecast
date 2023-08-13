import { useWeather } from "../context/Weather";

function Card() {
  const weather = useWeather();
  return (
    <>
      <div className=" shadow-lg shadow-slate-900 p-10 container mx-auto text-xl w-full  border-2 border-purple-600 rounded-md ">
        <img
          className=" mx-auto"
          src={weather?.data?.current?.condition?.icon}
        />

        <h2 className=" font-bold text-center text-2xl mt-2 mb-2">
          {weather.data?.current?.temp_c} .C
        </h2>
        <h3 className=" font-bold text-center text-2xl mb-5 mt-3">
        {weather.data?.location?.name}, 
          {weather.data?.location?.region},
          {weather.data?.location?.country}
        </h3>
      </div>
    </>
  );
}

export default Card;
