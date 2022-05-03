import React, {useState} from 'react'
import axios from 'axios'


function App() {
  const [data, setData]= useState({})
  const [city, setCity]= useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8b6a989168f9df6dedf6a7ced955246b`

  const searchCity = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setCity('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={city}
        onChange={event => setCity(event.target.value)}
        onKeyPress={searchCity}
        placeholder="enter a location..."
        type="text">
        </input>
      </div>
          <div className="container">
          <div className="card">
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </div>
              <div className="description">
                 {/* <div className="description-item">
                 <img src = "{data.weather[0].icon}" alt= " "> </img>
                </div> */}
                <div className="description-item">
                  {data.main ? <p>{data.weather[0].description}</p> : null}
                </div>
              </div>
            </div>

          {data.name != undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                <p>Feels like</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.main ? <p className='bold'>{data.wind.speed.toFixed()}Km/h</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
