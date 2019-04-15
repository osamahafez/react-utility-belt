import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import WeatherContainer from './containers/WeatherContainer/WeatherContainer';
import WorldClock from './containers/WorldClock/WorldClock';
import Calculator from './containers/Calculator/Calculator';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route path='/' component={Home} exact />
                    <Route path='/weather' component={WeatherContainer} />
                    <Route path='/worldClock' component={WorldClock} />
                    <Route path='/calculator' component={Calculator} />
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
