import React, { Component } from 'react';
import Aux from './hoc/Auxiliary';
import Layout from './components/Layout/Layout';
import WeatherContainer from './containers/WeatherContainer/WeatherContainer';
import WorldClock from './containers/WorldClock/WorldClock';
import Calculator from './containers/Calculator/Calculator';

class App extends Component {
  
  render() {
      return (
          <Aux>
              <Layout>
                  {/* <WeatherContainer /> */}
                  {/* <WorldClock /> */}
                <Calculator />
              </Layout>
          </Aux>
      );
  }
}

export default App;
