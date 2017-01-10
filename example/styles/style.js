import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "color": {
        "color": "#fff"
    },
    "backgroundColor": {
        "backgroundColor": "#1CAADE"
    },
    "layout": {
        "backgroundColor": "white",
        "flex": 1
    },
    "h3": {
        "color": "#494949",
        "fontSize": 16
    },
    "toolbarView": {
        "backgroundColor": "rgba(255,255,255,0.8)",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": width,
        "zIndex": 9
    },
    "toolbarMenu": {
        "height": 60,
        "backgroundColor": "#fff",
        "flexDirection": "row",
        "justifyContent": "space-between",
        "paddingLeft": 15,
        "paddingTop": 13,
        "paddingRight": 15
    },
    "toolbarTitleView": {
        "position": "absolute",
        "top": 27,
        "left": 0,
        "width": width - 160,
        "marginLeft": 80,
        "marginRight": 80,
        "alignItems": "center"
    },
    "toolbarTitle": {
        "color": "#494949",
        "fontSize": 16,
        "alignSelf": "center"
    },
    "textcolor": {
        "color": "#494949"
    },
    "icon": {
        "fontSize": 40,
        "color": "#494949"
    },
    "icon32": {
        "fontSize": 32,
        "color": "#494949"
    },
    "imageIconView": {
        "marginLeft": 2,
        "marginRight": 0,
        "marginTop": 6,
        "marginBottom": 10,
        "shadowColor": "#000",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "imageIcon": {
        "width": 14,
        "height": 14
    },
    "imageIconLarge": {
        "width": 18,
        "height": 18
    },
    "iconHome": {
        "width": 20,
        "marginLeft": -4
    },
    "iconPadding": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "iconLarge": {
        "width": 24
    },
    "iconBack": {
        "marginLeft": 0,
        "position": "absolute",
        "left": -12,
        "top": -7
    },
    "rowCenter": {
        "flexDirection": "row",
        "alignItems": "center"
    },
    "padLeft10": {
        "marginLeft": 18
    },
    "toolbar": {
        "height": 20,
        "backgroundColor": "#fff",
        "justifyContent": "space-between",
        "alignItems": "center",
        "flexDirection": "row",
        "paddingTop": 28,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "logo": {
        "resizeMode": "contain",
        "height": 22,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "modal": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "borderRadius": 3,
        "overflow": "hidden"
    },
    "image": {
        "width": width-20
    },
    "iconInput": {
        "position": "absolute",
        "top": 7,
        "left": 0,
        "opacity": 0.8,
        "color": "#aaa"
    },
    "inputIcon": {
        "position": "absolute",
        "left": 0,
        "top": 6,
        "resizeMode": "contain",
        "height": 24,
        "width": 24
    },
    "buttonRound": {
        "position": "relative",
        "borderColor": "#ddd",
        "borderWidth": 0.8,
        "borderTopWidth": 0,
        "borderRightWidth": 0,
        "borderLeftWidth": 0,
        "marginTop": 10,
        "marginRight": 8,
        "marginBottom": 8,
        "marginLeft": 8,
        "paddingBottom": 8
    },
    "button": {
        "backgroundColor": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderColor": "transparent",
        "borderWidth": 2,
        "alignSelf": "stretch",
        "borderRadius": 23,
        "height": 45,
        "marginTop": 18,
        "marginLeft": 10,
        "marginRight": 10
    },
    "buttonColor": {
        "backgroundColor": "#eee",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "borderColor": "transparent",
        "borderWidth": 2,
        "alignSelf": "stretch",
        "borderRadius": 23,
        "height": 45,
        "marginTop": 18,
        "marginLeft": 10,
        "marginRight": 10
    },
    "buttonText": {
        "color": "#eee",
        "alignSelf": "center",
        "fontSize": 18
    },
    "buttonColorText": {
        "color": "#fff",
        "alignSelf": "center",
        "fontSize": 17
    },
    "textInput": {
        "height": 40,
        "backgroundColor": "transparent",
        "color": "rgba(255,255,255,0.9)",
        "paddingLeft": 40
    },
    "textInputDark": {
        "height": 40,
        "backgroundColor": "transparent",
        "color": "rgba(0,0,0,0.9)",
        "paddingLeft": 40
    },
    "outerBorder": {
        "position": "relative",
        "borderColor": "white",
        "borderWidth": 0.8,
        "borderTopWidth": 0,
        "borderRightWidth": 0,
        "borderLeftWidth": 0,
        "marginTop": 5,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "outerBorderDark": {
        "position": "relative",
        "borderColor": "#aaa",
        "borderWidth": 0.8,
        "borderTopWidth": 0,
        "borderRightWidth": 0,
        "borderLeftWidth": 0,
        "marginTop": 5,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "inputSearch": {
        "height": 34,
        "borderColor": "#ddd",
        "borderWidth": 1,
        "fontSize": 14,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "borderRadius": 4,
        "marginTop": 8,
        "marginLeft": 10,
        "marginRight": 10,
        "marginBottom": 8,
        "color": "#333",
        "backgroundColor": "rgba(255,255,255,0.9)",
        "width": width - 20
    },
    "searchBox": {
        "height": 0
    },
    "halfWidth": {
        "width": width/2 - 20
    },
    "spinner": {
        "width": width,
        "alignItems": "center",
        "marginTop": 30,
        "marginBottom": 30
    },
    "templateLayout": {
        "flexWrap": "wrap",
        "flexDirection": "row",
        "alignItems": "stretch"
    },
    "templateRow": {
        "width": width/2 - 12,
        "height": vh * 21,
        "backgroundColor": "#f9f9f9",
        "marginLeft": 8,
        "marginBottom": 8,
        "borderWidth": 1,
        "borderColor": "#eee",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "templateImage": {
        "width": width/2-12,
        "height": 100,
        "resizeMode": "contain"
    },
    "templateMenu": {
        "color": "#888",
        "fontWeight": "600",
        "fontSize": 12
    }
});
