import React, { Component } from 'react';
import Aux from './hoc/Auxiliary';
import Layout from './components/Layout/Layout';
import WeatherContainer from './containers/WeatherContainer/WeatherContainer';
import WorldClock from './components/WorldClock/WorldClock';

class App extends Component {
  
  render() {
      return (
          <Aux>
              <Layout>
                  {/* <WeatherContainer /> */}
                  <WorldClock />
              </Layout>
          </Aux>
      );
  }
}

export default App;
