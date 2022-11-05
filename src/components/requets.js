import axios from "axios";

class Requests{
    #openWeather = axios.create({baseURL:"http://api.openweathermap.org/data/2.5"})
    #iranState = axios.create({baseURL:"https://iran-locations-api.vercel.app/api/v1"})
    // get 
    async getWeatherByName(location){
        const response = await this.#openWeather.get(`weather?q=${location.toLowerCase()}&units=metric&APPID=4fb5894ddda3f0e1778292570595ca84`)
        return response.data;
    }
    async getAllStates(){
        const response = await this.#iranState.get("states");
        return response.data;
    }
    async getAllCityOfStatesByName(name){
        const response = await this.#iranState.get(`cities?state=${name}`);
        return response.data
    }
    async getCityByCode(code){
        const response = await this.#iranState.get(`states?id=${code}`);
        return response.data
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {Requests : new Requests()}