import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './Containers/Home/Home';
import Nfts from './Containers/Nfts/Nfts';


import './custom.css'
import Buy from './Containers/Buy/Buy';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/buy' component={Buy} />
        <Route path='/nfts' component={Nfts} />
      </Layout>
    );
  }
}
