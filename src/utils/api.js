import axios from 'axios';

export const getWeather = (city) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=68dbb47c335a508ad8b559587b15f2df`)
        .then((response) => {
            return response.data
        }).catch((err) => {
            return err
        });
};