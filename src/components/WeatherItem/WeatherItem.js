import React from 'react';
import { 
    Card, 
    CardImg, 
    CardBody,
    CardTitle, 
    CardText   
} from 'reactstrap';
import './WeatherItem.css';
import CloudSunny from '../../assets/images/CloudSunny.png';

const weatherItem = (props) => {
    return ( 
        <div className='WeatherItemWrapper'>
            <Card>
                <CardImg top width='100%' src={CloudSunny} alt="Clould Sunny" />
                <CardBody>
                    <hr />
                    <CardTitle className='WeatherItemCardTitle'>{props.day}</CardTitle>
                    <CardText className='WeatherItemCardText'>{props.high}/{props.low}</CardText>
                </CardBody>
            </Card>
        </div> 
    );
}
 
export default weatherItem;