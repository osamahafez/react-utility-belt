import React, { Component } from 'react';
import './Calculator.css';
import {Button} from 'reactstrap';

class Calculator extends Component {

    state = {
        result: '',
        numbersDisplay: ''
    }

    charTyped = (char) => {
        // display numbers and operations on screen
        let numbersDisplay_copy = this.state.numbersDisplay;
        numbersDisplay_copy += char;
        this.setState({numbersDisplay:numbersDisplay_copy});
    }

    charDeleted = () => {
        let numbersDisplay_copy = this.state.numbersDisplay.slice(0,-1);
        this.setState({numbersDisplay:numbersDisplay_copy});
    }

    clear = () => {
        this.setState({
            numbersDisplay: '', 
            result: ''
        });
    }

    getResult = () => {
        let result = eval(this.state.numbersDisplay);
        this.setState({result:result, numbersDisplay:''});
    }

    getAnswer = () => {
        let numbersDisplay_copy = this.state.numbersDisplay+this.state.result;
        this.setState({numbersDisplay:numbersDisplay_copy});
    }

    render() {
        return (
            <div className='calculator-container'>
                <div className='screen'>
                    <div className='upper-screen'>
                        {this.state.numbersDisplay}
                    </div>
                    <div className='lower-screen float-right'>
                        {this.state.result}
                    </div>
                </div>
                <div className='buttons'>
                    <div className='row custom-row'>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={this.clear}><span className='cell cell-big-word'>AC</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={this.charDeleted}><span className='cell cell-big-word'>DEL</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={this.getAnswer}><span className='cell cell-big-word'>ANS</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={()=>{this.charTyped('/')}}><span className='cell'>/</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('7')}}><span className='cell'>7</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('8')}}><span className='cell'>8</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('9')}}><span className='cell'>9</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={()=>{this.charTyped('*')}}><span className='cell'>*</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('4')}}><span className='cell'>4</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('5')}}><span className='cell'>5</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('6')}}><span className='cell'>6</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={()=>{this.charTyped('-')}}><span className='cell'>-</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('1')}}><span className='cell'>1</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('2')}}><span className='cell'>2</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('3')}}><span className='cell'>3</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={()=>{this.charTyped('+')}}><span className='cell'>+</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('0')}}><span className='cell'>0</span></Button>
                        </div>
                        <div className='col-md-3 col-xs-3 col-sm-3'>
                            <Button color="info" size="lg" block onClick={() => {this.charTyped('.')}}><span className='cell'>.</span></Button>
                        </div>
                        <div className='col-md-6 col-xs-6 col-sm-6'>
                            <Button color="danger" size="lg" block onClick={this.getResult}><span className='cell'>=</span></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;