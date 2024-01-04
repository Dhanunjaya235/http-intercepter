import axios from 'axios';



export const httpInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: '',
        q: '',
        units: 'metric'
    },
    headers: {
        Accept: 'UTF-8',
        // Authorization:'3cd31a95f107d9ecd499eb2e6dec17b1',
    },
    // timeout: 10000,
    // transitional:{
    //     clarifyTimeoutError:true,
    //     silentJSONParsing:false,
    //     forcedJSONParsing:false
    // }
})

httpInstance.interceptors.request.use(
    (config) => {
        //config.headers['Cache-Control']="no-cache"
        console.log(config.url)
        config.params.appid = '3cd31a95f107d9ecd499eb2e6dec17b1';
        return config
    },
    (error) => {
        console.log(error)
    }

)

httpInstance.interceptors.response.use(

    (responce) => {
        responce.headers['Cache-Control']='max-age=3600'
        console.log(responce)
        if (responce.status === 200) {
            return responce.data.main
        }
    },
    (error) => {
        console.log(error)
    }
)

