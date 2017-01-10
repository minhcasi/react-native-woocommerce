'use strict';

import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import css from "./styles/product";
import style from "./styles/style";
import {Actions} from "react-native-router-flux";

export default class ProductItem extends Component {
	viewProduct() {
		Actions.productdetails( {product: this.props.product} );
	}
	render() {
		return (
            <TouchableOpacity onPress={this.viewProduct.bind(this)} style={[css.cards]}>
                <Image source={{uri: this.props.product.images[0].src}} style={css.productItem}></Image>

                <TouchableOpacity style={css.star}>
                    <Image source={require('./images/icon-heart.png')} style={style.imageIcon}></Image>
                </TouchableOpacity>

                <Text style={css.productName}>{this.props.product.name}</Text>

                <View style={{flexDirection:'row'}}>
                    <Text style={[css.discountPrice, {paddingBottom: 12}]}>${this.props.product.price}</Text>
                </View>
            </TouchableOpacity>
		);
	}

}
