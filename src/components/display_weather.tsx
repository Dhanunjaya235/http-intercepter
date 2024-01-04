import { httpInstance } from '../intercepters/openmap-intercepter';
import {  useRef, useState } from 'react';
import './display_weather.css'
interface Values {
    show:boolean
    city: string,
    temp: string,
    feelsLike: string,
    humidity: string,
    pressure: string
}


export default function WeatherForm() {

    const [temperature, setTemparature] = useState<Values>({
        show:false,
        city: '',
        temp: '',
        feelsLike: '',
        humidity: '',
        pressure: '',
    })
    const displayWeather = (city: string) => {

        httpInstance.defaults.params.q = city;
        httpInstance.get('/weather')
            .then((responce: any) => {
                // responce=(JSON.parse(responce)).main
                // console.log(responce)
                let data: Values = {
                    show:true,
                    city: city,
                    temp: responce.temp,
                    feelsLike: responce.feels_like,
                    humidity: responce.humidity,
                    pressure: responce.pressure
                }
                setTemparature(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='form' style={{ "width": "20%", "justifyContent": "center", marginLeft: "40%", marginTop: "10%" }}>
            <form>
                <select onChange={(e) => displayWeather(e.target.value)}>
                    <option value="">Select A City from the DropDown</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Visakhapatnam">Vizag</option>
                    <option value="Vijayawada">Vijayawada </option>
                    <option value="Bangalore" >Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Kolkata" >Kolkata</option>
                    <option value="Mumbai" >Mumbai</option>
                </select>
            </form>
            {
                temperature.show && <div className='details'>
                    <p>City:<span>{temperature.city}</span></p>
                    <p>Temparature:<span>{temperature.temp}</span>&#8451;</p>
                    <p>Feels_Like:<span>{temperature.feelsLike}</span>&#8451;</p>
                    <p>Humidity:<span>{temperature.humidity}</span> g/m<sup>3</sup></p>
                    <p>Pressure:<span>{temperature.pressure} </span>pa</p>
                </div>
            }
        </div>
    )
}

