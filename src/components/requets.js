import axios from "axios";

class Requests{
    #req = axios.create({
        baseURL:"http://api.openweathermap.org/data/2.5"
    })
    // get 
    async getWeatherByName(location){
        const response = await this.#req.get(`weather?q=${location.toLowerCase()}&units=metric&APPID=4fb5894ddda3f0e1778292570595ca84`)
        return response.data;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {Requests : new Requests()}
