import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import formatTemperature from '../utils/utils';
import styles from '../App.module.css';
import wind from '../images/wind.png';
import Clear from '../images/clear.png';
import Clouds from '../images/clouds.png';
import Drizzle from '../images/drizzle.png';
import Rain from '../images/rain.png';
import Snow from '../images/snow.png';
import Thunderstorm from '../images/thunderstorm.png';

export default class City extends Component {
    state = {
        error: false,
        weatherInfo: false,
        images: { wind, Clear, Clouds, Drizzle, Rain, Snow, Thunderstorm },
        temperatures: {}
    };

    componentDidMount() {
        this.fetchCity(this.props.city)
    }

    render() {
        if (this.state.error) return <p className={styles.error}>{this.state.error}</p>;
        if (!this.state.weatherInfo) return <p className={styles.loading}>loading...</p>;

        const { pressure, humidity } = this.state.weatherInfo.main;
        const { deg, speed } = this.state.weatherInfo.wind;
        const { main, description } = this.state.weatherInfo.weather[0];
        const { temp, minTemp, maxTemp, feelsLike } = this.state.temperatures;
        const { visibility } = this.state.weatherInfo;

        return (
            <>
                <Link to='/' className={styles.button}>back</Link>
                <div className={styles.parent}>
                    <p className={styles.descriptionCard}>
                        <img src={this.state.images[main]} alt={`${main} symbol`}></img><br></br>
                        <p>
                            Mainly {main} <br></br> Description: {description}
                        </p>
                    </p>
                    <p className={styles.mainTemperatureCard}>
                        {temp}° <br></br><br></br> Currently
                </p>
                    <p className={styles.windCard}>
                        <img src={wind} alt='wind icon'></img> <br></br>
                        {speed} MPS at a {deg} degree
                </p>
                    <p className={styles.mainInfo}> Today in {this.props.city}, it feels like {feelsLike}° <br></br><br></br> min: {minTemp}° <br></br> max: {maxTemp}°
                    </p>
                    <p className={styles.temperatureCard}>
                        {pressure}hPa <br></br> Pressure <br></br><br></br> {humidity}% <br></br> Humidity  <br></br><br></br> {visibility} <br></br> Visibility
                    </p>
                </div>
                <p className={styles.footer}>powered by OpenWeather</p>
            </>
        )
    };

    fetchCity = (city) => {
        api.getWeather(city).then((results) => {
            const temp = formatTemperature(results.main.temp);
            const minTemp = formatTemperature(results.main.temp_min);
            const maxTemp = formatTemperature(results.main.temp_max);
            const feelsLike = formatTemperature(results.main.feels_like)
            return Promise.all([temp, minTemp, maxTemp, feelsLike, results])
        }).then(([temp, minTemp, maxTemp, feelsLike, results]) => {
            this.setState({ weatherInfo: results, temperatures: { temp, minTemp, maxTemp, feelsLike } })
        })
            .catch((err) => {
                this.setState({ error: `We are currently unable to present the weather for ${this.props.city} ` })
            })
    }
};