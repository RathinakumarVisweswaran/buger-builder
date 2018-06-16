import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder/>
      </Layout>
    );
  }
}

export default App;
