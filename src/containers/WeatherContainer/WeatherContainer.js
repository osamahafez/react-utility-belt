import React, { Component } from 'react';
import WeatherItem from '../../components/WeatherItem/WeatherItem';
import './WeatherContainer.css';

class WeatherContainer extends Component {


    render() {
        return (
            <div>
                <h1 className='WeatherHeading'>Today's Weather</h1>
                <WeatherItem day='Tuesday' high='30' low='18' />
            </div>
        );
    }
}

export default WeatherContainer;