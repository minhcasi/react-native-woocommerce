/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import React, { Component } from 'react';
import { AppRegistry,  StatusBar} from 'react-native';

StatusBar.setBarStyle('light-content');
import Product from './Product';

class example extends Component {
    render() {
        return (
            <Product />
        );
    }
}

AppRegistry.registerComponent('example', () => example);
