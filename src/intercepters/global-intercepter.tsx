import axios from "axios";

export const globalInstance=axios.create({
    baseURL:'',
    params:{},
    headers:{}
})
globalInstance.interceptors.request.use(
    (config)=>{
        console.log(config.url)
        switch(config.url){
            case 'https://api.openweathermap.org/data/2.5/weather':
                config.params={
                    appid : '3cd31a95f107d9ecd499eb2e6dec17b1',
                    q:'delhi',
                    units:'metric'
                }
                break;
            case 'http://localhost:3000/registeredUsers':
                break;
            default:
                break;
        }
        return config;
    },
    (error)=>{
        console.log(error)
    }

)

globalInstance.interceptors.response.use(

    (responce)=>{
        if(responce.status===200){
            return responce.data
        }
    },
    (error)=>{
        console.log(error)
    }
)