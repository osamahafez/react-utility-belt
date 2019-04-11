import React, { Component } from 'react';
import './Calculator.css';
import {Button} from 'reactstrap';

class Calculator extends Component {

    state = {
        num1: null,
        num2: null,
        op: '',
        result: null,
        numbersDisplay: ''
    }

    numberTyped = (num) => {

        let numbersDisplay_copy = this.state.numbersDisplay;
        numbersDisplay_copy += num;
        this.setState({numbersDisplay:numbersDisplay_copy});

        // console.log(num+1);
    }

    clear = () => {
        this.setState({numbersDisplay:null});
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
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={this.clear}><span className='cell cell-big-word'>AC</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell cell-big-word'>DEL</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell cell-big-word'>ANS</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>/</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('7')}}><span className='cell'>7</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('8')}}><span className='cell'>8</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('9')}}><span className='cell'>9</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>*</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('4')}}><span className='cell'>4</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('5')}}><span className='cell'>5</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('6')}}><span className='cell'>6</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>-</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('1')}}><span className='cell'>1</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('2')}}><span className='cell'>2</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('3')}}><span className='cell'>3</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>+</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block onClick={() => {this.numberTyped('0')}}><span className='cell'>0</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>.</span></Button>
                        </div>
                        <div className='col-md-6'>
                            <Button color="danger" size="lg" block><span className='cell'>=</span></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;