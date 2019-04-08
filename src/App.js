import React, { Component } from 'react';
import Aux from './hoc/Auxiliary';
import Layout from './components/Layout/Layout';
import WeatherContainer from './containers/WeatherContainer/WeatherContainer';

class App extends Component {
  
  render() {
      return (
          <Aux>
              <Layout>
                  <WeatherContainer />
              </Layout>
          </Aux>
      );
  }
}

export default App;
