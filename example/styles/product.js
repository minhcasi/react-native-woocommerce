import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container": {
        "flex": 1
    },
    "list": {
        "flex": 1,
        "marginBottom": 55,
        "backgroundColor": "transparent"
    },
    "color": {
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "backgroundColor": "#EBEBEB"
    },
    "productNavIcon": {
        "fontSize": 26,
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7
    },
    "dropdown": {
        "resizeMode": "contain",
        "height": 10,
        "width": 10,
        "marginRight": 10
    },
    "category": {
        "fontSize": 15,
        "color": "#fff",
        "paddingRight": 10
    },
    "cards": {
        "position": "relative",
        "backgroundColor": "#fff",
        "width": width -20,
        "alignItems": "center",
        "justifyContent": "center",
        "marginLeft": 10,
        "marginRight": 10,
        "marginTop": 5,
        "marginBottom": 5,
        "shadowColor": "#000",
        "borderRadius": 2
    },
    "firstCard": {
        "marginTop": 110
    },
    "productItem": {
        "width": width-30,
        "height":  (width-20)*962/875,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "detailPanel": {
        "height": 300,
        "flex": 1,
        "alignItems": "center",
        "justifyContent": "flex-end"
    },
    "detailBlock": {
        "alignItems": "center",
        "backgroundColor": "rgba(255,255,255,0.5)",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "productName": {
        "color": "#535353",
        "fontWeight": "600",
        "fontSize": 13,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "paddingLeft": 1
    },
    "detailName": {
        "color": "#535353",
        "fontWeight": "300",
        "fontSize": 18,
        "paddingTop": 8
    },
    "detailDesc": {
        "color": "#535353",
        "fontWeight": "300",
        "fontSize": 13,
        "paddingTop": 10,
        "textAlign": "center"
    },
    "detailPrice": {
        "fontSize": 18,
        "width": 100,
        "textAlign": "center"
    },
    "detailFullPrice": {
        "fontSize": 15,
        "textDecorationLine": "line-through"
    },
    "iconZoom": {
        "position": "absolute",
        "right": 12,
        "top": 16
    },
    "originalPrice": {
        "color": "#B3B3B3",
        "fontSize": 12,
        "fontWeight": "400",
        "marginLeft": 1,
        "marginRight": 1,
        "textDecorationLine": "line-through",
        "textDecorationColor": "#B3B3B3"
    },
    "discountPrice": {
        "color": "#535353",
        "paddingLeft": 5,
        "fontSize": 12,
        "fontWeight": "600",
        "marginLeft": 1,
        "marginRight": 1,
        "paddingBottom": 8
    },
    "discountPercent": {
        "color": "#ED9DA6",
        "fontSize": 12,
        "fontWeight": "600"
    },
    "star": {
        "position": "absolute",
        "right": 15,
        "top": 15
    },
    "filter": {
        "height": 50,
        "width": 50
    },
    "cardsGrid": {
        "position": "relative",
        "backgroundColor": "#fff",
        "width":  (width/2)-10,
        "marginTop": 5,
        "marginBottom": 5,
        "shadowColor": "#000"
    },
    "productItemGrid": {
        "width":  (width/2)-20,
        "height":  ((width/2)-20)*353/218 ,
        "marginTop": 5,
        "marginLeft": 5,
        "marginRight": 5,
        "marginBottom": 5
    },
    "detailsBtn": {
        "width": width/2,
        "height": 40,
        "alignItems": "center",
        "justifyContent": "center"
    },
    "detailsBtnTxt": {
        "fontSize": 12,
        "fontWeight": "600"
    },
    "detailsDropdown": {
        "fontSize": 16
    },
    "backBtn": {
        "backgroundColor": "transparent",
        "height": 15,
        "width": 15,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "shadowColor": "#000"
    },
    "image": {
        "flex": 1,
        "width": width,
        "height": width / 2
    }
});