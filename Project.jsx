import React, {useState} from 'react';

function Project() {
  const API_KEY = "2443f6f2c6349108d4d5e90ccf3d7973";
  const [data, setData] = useState("");
  const [weather, setWeather] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`;

  const search = url =>  fetch(url).then(res => res.json()).then(main => setWeather(main));

  const changeInput = e => setData(e.target.value);

  const sub = () => search(url);


  return (
    <>
      <input type="text" value={data} onChange={changeInput}/>
      <button type="submit" onClick={sub}>Submit</button>
      <h3>Country - {weather?.sys?.country}</h3>
      <h3>Temperature: {weather?.main?.temp}</h3>
      <h3>Wind speed: {weather?.wind?.speed}</h3>
      <h3>Description: {weather?.weather?.[0].description}</h3>
    </>
  );
}

export default Project;