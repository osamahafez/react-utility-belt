import React, { Component } from 'react';
import Auxiliary from './hoc/Auxiliary';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Layout> Hello layout </Layout>
      </Auxiliary>
    );
  }
}

export default App;
