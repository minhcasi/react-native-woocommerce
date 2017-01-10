'use strict';

import React, {Component} from "react";
import {Navigator, Text, View} from "react-native";
import {Scene, Schema, Animations} from "react-native-router-flux";
import Product from "./Product";

export default class RootRouter extends Component {
    render() {
        const scenes = Actions.create(
            <Scene key="scene">
                <Scene key="product" component={Product} title="Product" initial={true}/>
            </Scene>
        );

        return (
            <Router hideNavBar={true} scenes={scenes}/>
        );
    }
}
