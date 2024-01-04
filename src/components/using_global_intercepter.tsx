import axios from "axios";
import { globalInstance } from "../intercepters/global-intercepter";
import './display_weather.css'
export default function GlobalIntercepter(){

    const getWeather=()=>{
        console.log("Weather")
        globalInstance.get('https://api.openweathermap.org/data/2.5/weather')
        .then(responce=>{
            console.log(responce)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const getAllUsers=()=>{
        globalInstance.get('http://localhost:3000/registeredUsers')
        .then(responce=>{
            console.log(responce)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="global">
            <h1>Global Intercepter</h1>
            <button onClick={getWeather}>Get Temparature</button><br></br>
            <button onClick={getAllUsers}>Get All Users</button>
        </div>
    )
}
