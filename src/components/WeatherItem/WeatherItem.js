import React from 'react';
import { 
    Card, 
    CardImg, 
    CardBody,
    CardTitle, 
    CardText   
} from 'reactstrap';
import './WeatherItem.css';
import CloudSunny from '../../assets/images/WeatherImages/CloudSunny.png';
import Sunny from '../../assets/images/WeatherImages/Sunny.png';
import Rainy from '../../assets/images/WeatherImages/Rainy.png';
import Lighting from '../../assets/images/WeatherImages/Lighting.png';

const weatherItem = (props) => {

    // generating weather image depending on the random values of the degrees
    let weatherImg = '';
    if (props.high < 30 && props.high > 15 && props.low <= 15 && props.low >= 7) {
        weatherImg=CloudSunny;
    }
    else if(props.high <= 15 && props.low <= 10 && props.low > 7) {
        weatherImg=Rainy;
    }
    else if(props.high <= 15 && props.low <= 7) {
        weatherImg=Lighting;
    }
    else {
        weatherImg=Sunny;
    }

    return ( 
        <div className='WeatherItemWrapper'>
            <Card >
                <CardImg top width='100%' src={weatherImg} alt="Weather Image" />
                <CardBody>
                    <hr />
                    <div style={{backgroundColor: '#fff'}}>
                        <CardTitle className='WeatherItemCardTitle'>{props.day}</CardTitle>
                        <CardText className='WeatherItemCardText'>{props.high}/{props.low}</CardText>
                    </div>
                </CardBody>
            </Card>
        </div> 
    );
}
 
export default weatherItem;