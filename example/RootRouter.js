'use strict';

import React, {Component} from "react";
import {Navigator, Text, View} from "react-native";
import {Scene, Router, Schema, Actions, Animations, TabBar} from "react-native-router-flux";
import Intro from "./Views/Intro";
import Login from "./Views/Login";
import Home from "./Views/Home";
import Product from "./Views/Product";
import Profile from "./Views/Profile";
import Notification from "./Views/Notification";
import Complete from "./Views/Complete";
import ProductDetails from "./Views/ProductDetails";
import Checkout from "./Views/Checkout";
import TrackOrder from "./Views/TrackOrder";
import Cart from "./Views/Cart";
import WooProduct from "./Views/WooCommerce/Index";
import WishList from "./Views/WishList";
import ProductGrid from "./Views/ProductGrid";
import MyOrder from "./Views/MyOrder";
import PostDetails from "./Views/Wordpress/NewsDetail";
import News from "./Views/Wordpress/Index";
import Templates from "./Views/Templates";
import AppEventEmitter from "./../Services/AppEventEmitter";

import MenuSide from "./Views/Navigation/MenuScale";
// import MenuSide from "./Views/Navigation/MenuOverlay";
// import MenuSide from "./Views/Navigation/MenuSmall";
// import MenuSide from "./Views/Navigation/MenuWide";

export default class RootRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {menuStyle: 0}
    }

    changeMenuStyle(data) {
        this.setState({menuStyle: data.menuId})
    }

    componentDidMount() {
        AppEventEmitter.addListener('app.changeMenuStyle', this.changeMenuStyle.bind(this));
    }

    render() {
        const scenes = Actions.create(
            <Scene key="scene">
                <Scene key="intro" component={Intro}/>
                <Scene key="login" component={Login}/>
                <Scene key="home" component={Home} title="Home"/>
                <Scene key="productgrid" component={ProductGrid} title="ProductGrid"/>
                <Scene key="product" component={Product} title="Product"/>
                <Scene key="notification" component={Notification} title="Notification"/>
                <Scene key="cart" component={Cart} title="Cart"/>
                <Scene key="checkout" component={Checkout} title="Checkout"/>
                <Scene key="complete" component={Complete} title="Complete"/>
                <Scene key="trackorder" component={TrackOrder} title="TrackOrder"/>
                <Scene key="wishlist" component={WishList} title="WishList"/>
                <Scene key="myorder" component={MyOrder} title="MyOrder"/>
                <Scene key="profile" component={Profile} title="Profile"/>
                <Scene key="templates" component={Templates} title="Templates" />


                <Scene key="wooProduct" component={WooProduct} title="Woo Product" initial={true}/>
                <Scene key="productdetails" component={ProductDetails} title="ProductDetails"/>
                <Scene key="news" component={News} title="News"/>
                <Scene key="postDetails" component={PostDetails} title="Post"/>
            </Scene>
        );

        return (<MenuSide ref="menuDefault" scenes={scenes}/>);
    }
}
