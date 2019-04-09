import React, { Component } from 'react';
import WeatherItem from '../../components/WeatherItem/WeatherItem';
import './WeatherContainer.css';

class WeatherContainer extends Component {


     

    render() {

        // generating random degrees
        const highDeg = Math.floor(Math.random()*(36-12+1)+12);
        const lowDeg = (highDeg <= 20) ? Math.floor(Math.random()*(10-5+1)+5) : Math.floor(Math.random()*(18-11+1)+11);
        const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const randomDayNumber = Math.floor(Math.random()*(6-0+1)+0);
        
        return (
            <div>
                <h1 className='WeatherHeading'>Today's Weather</h1>
                <div style={{display: 'flex'}}>
                    <WeatherItem day={days[randomDayNumber]} high={highDeg} low={lowDeg} /> 
                    <WeatherItem day={days[(randomDayNumber+1)%7]} high={highDeg+2} low={lowDeg} />
                    <WeatherItem day={days[(randomDayNumber+2)%7]} high={highDeg+4} low={lowDeg} />
                </div>
            </div>
        );
    }
}

export default WeatherContainer;