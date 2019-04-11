import React, { Component } from 'react';
import './Calculator.css';
import {Button} from 'reactstrap';

class Calculator extends Component {





    render() {
        return (
            <div className='calculator-container'>
                <div className='screen'>
                    <div className='upper-screen'>
                        15+9
                    </div>
                    <div className='lower-screen float-right'>
                        654
                    </div>
                </div>
                <div className='buttons'>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell cell-big-word'>AC</span></Button>
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
                            <Button color="info" size="lg" block><span className='cell'>7</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>8</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>9</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>*</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>4</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>5</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>6</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>-</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>1</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>2</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>3</span></Button>
                        </div>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>+</span></Button>
                        </div>
                    </div>
                    <div className='row custom-row'>
                        <div className='col-md-3'>
                            <Button color="info" size="lg" block><span className='cell'>0</span></Button>
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