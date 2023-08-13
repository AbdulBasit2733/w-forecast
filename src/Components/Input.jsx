import {useWeather} from '../context/Weather';

function Input() {

    const Weather = useWeather();
    console.log(Weather);
    return (
        <input
        className=' shadow-lg shadow-purple-900 rounded-lg py-2 pl-9 pr-3 focus:ring-1 w-full focus:outline-none mt-8 border-2 placeholder:text-grey-400 placeholder:italic border-purple-800 '
        placeholder="Search Here"
        onChange={(e)=> Weather.setSearchCity(e.target.value)}
        value={Weather.searchCity} 
        />
    )
}


export default Input
