/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Product from './Product';
export default class example extends Component {
  render() {
    return (
      <Product />
    );
  }
}
AppRegistry.registerComponent('example', () => example);
