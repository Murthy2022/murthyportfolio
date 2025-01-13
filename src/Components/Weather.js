import '../App.css';
import {useState} from 'react';
import Rain from '../Assets/Images/Rain-img.png'
import Clouds from '../Assets/Images/Clouds-img.png'
import Haze from '../Assets/Images/Haze-img.png'
import Clear from '../Assets/Images/Clear-img.png'

function Weather() {

  const[climateCondition,setClimateCondition] = useState("");
  const[city,setCity] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); 
  const [minTemp, setMinTemp] = useState('0');
  const [maxTemp, setMaxTemp] = useState('0');
  

async function getWether(){

try{
  setLoading(true);
  setError(null);
  console.log("In getWeather")
  const APIURL='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=aea5beccc316a48fc65afa90c04dde29';

  console.log(APIURL)
  const response = await fetch(APIURL)
  //console.log(response)
  if (!response.ok) {
    setClimateCondition("Unable to Fetch the data");
    //throw new Error('Network response was not ok');
  }

  const data = await response.json()
  console.log(data)

  setClimateCondition(data.weather[0].main);
  setMinTemp(Math.ceil(data.main.temp_min-273.15));
  setMaxTemp(Math.ceil(data.main.temp_max-273.15));


  console.log(climateCondition)
  setLoading(false);
} catch (error) {
  setError(error.message);
} 
}

if(loading){
  return <div>Loading...</div>
}
if (error){
  return <div>Error...{error}</div>
}

  return (
    <>
    <div className="weather-box">
    <h1>Weather</h1>
    <input className='weather-inpt' type="text" placeholder='Enter the city name you want to weather info' onChange={(e) => setCity(e.target.value)}/>
    <button className='get-wther-name-btn' onClick={getWether}>Get Weather Details</button>
    <h3>Min Temp : {minTemp}&deg;C</h3>
    <h3>Max Temp : {maxTemp}&deg;C</h3>
    <h2>{climateCondition}</h2>
    {
      climateCondition == 'Rain' ? <img className="weather-image" src={Rain} alt=""/> 
      : climateCondition == 'Clouds' ? <img className="weather-image" src={Clouds} alt=""/> 
      : climateCondition == 'Haze'  ? <img className="weather-image" src={Haze} alt=""/>
      : climateCondition == 'Clear'  ? <img className="weather-image" src={Clear} alt=""/>
      :<h2> No Image </h2>
    }
    </div>
    </>

  );
}

export default Weather;