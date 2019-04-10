import React, {Component} from 'react';
import {Toast, ToastHeader, ToastBody} from 'reactstrap';
class WorldClock extends Component {

    state = {
        h: 0,
        m: 0,
        s: 0,
    }


    clock = () => {

        
        // get the GMT time
        let current_date = new Date();
        let seconds = current_date.getSeconds();
        let minutes = current_date.getMinutes();
        let hours = (current_date.getHours()-2)%24; // subtract 2 because cairo is GMT +2

         // I want the s, m and h to be 2 digits at all times (e.g. 22:15:2 becomes 14:15:02)
         if(seconds < 10)
            seconds = "0"+seconds;
         if(minutes < 10)
            minutes = "0"+minutes;
         if(hours < 10)
            hours = "0"+hours;

        this.setState({
            h: hours,
            m: minutes,
            s: seconds,
        });
    }

    minuteConverter(min) {
        if(min < 10)
            return min = "0"+min;
        else 
            return min;
    }

    render() {
        // run the function every one second
        setInterval(this.clock, 1000);
        // Date.prototype.addHours= function(h){
        //     this.setHours(this.getHours()+h);
        //     return this;
        // }
        return(
            <div className='container-fluid'>
                <div className="p-3 my-2 rounded" style={{backgroundColor:'#2e86de'}}>
                    <Toast>
                        <ToastHeader>
                            <h3>Washington</h3>
                        </ToastHeader>
                        <ToastBody className='display-3'>
                            {(this.state.h-6)%24}:{this.state.m}:{this.state.s}
                        </ToastBody>
                    </Toast>
                </div>
                <div className="p-3 my-2 rounded" style={{backgroundColor:'#fbc531'}}>
                    <Toast>
                        <ToastHeader>
                            <h3>Cairo</h3>
                        </ToastHeader>
                        <ToastBody className='display-3'>
                            {(this.state.h+2)%24}:{this.state.m}:{this.state.s}
                        </ToastBody>
                    </Toast>
                </div>
                <div className="p-3 my-2 rounded" style={{backgroundColor:'#4cd137'}}>
                    <Toast>
                        <ToastHeader>
                            <h3>Sydney</h3>
                        </ToastHeader>
                        <ToastBody className='display-3'>
                            {(this.state.h+10)%24}:{this.state.m}:{this.state.s}
                        </ToastBody>
                    </Toast>
                </div>
                <div className="p-3 my-2 rounded" style={{backgroundColor:'#c0392b'}}>
                    <Toast>
                        <ToastHeader>
                            <h3>London</h3>
                        </ToastHeader>
                        <ToastBody className='display-3'>
                            {(this.state.h+1)%24}:{this.state.m}:{this.state.s}
                        </ToastBody>
                    </Toast>                    
                </div>
                <div className="p-3 my-2 rounded" style={{backgroundColor:'#006266'}}>
                    <Toast>
                        <ToastHeader>
                            <h3>Rio de Janeiro</h3>
                        </ToastHeader>
                        <ToastBody className='display-3'>
                            {(this.state.h-3)%24}:{this.state.m}:{this.state.s}
                        </ToastBody>
                    </Toast>
                </div>
                <div className="p-3 my-2 rounded" style={{backgroundColor:'#e67e22'}}>
                    <Toast>
                        <ToastHeader>
                            <h3>Mumbai</h3>
                        </ToastHeader>
                        <ToastBody className='display-3'>
                            {(this.state.h+5)%24}:{this.minuteConverter((this.state.m+30)%60)}:{this.state.s}
                        </ToastBody>
                    </Toast>
                </div>
            </div>
        );
    }
}

export default WorldClock;