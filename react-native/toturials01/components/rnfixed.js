import React, {Component} from "react";
import {Text, View} from "react-native";

// View se xet theo chieu doc

export default class RNFixed extends React.Component {
    render() {
        return(
            <View style={ {flex: 1} }>
                <View style={ { flex:25, backgroundColor: 'blue'} }></View>
                <View style={ { flex:25, backgroundColor: 'cyan'} }></View>
                <View style={ { flex:25, backgroundColor: 'red'} }></View>
                <View style={ { flex:25, backgroundColor: 'pink'} }></View>
            </View>
        );
    }
}