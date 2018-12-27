import React, {Component} from "react";
import {View, Text} from "react-native";

export default class Justify extends React.Component {
    render() {
        return(
            <View style={ {
                flex: 1, 
                flexDirection: 'column',
                justifyContent: 'space-between', // flex start bắt đầu từ trái sang phải từ trên xuống dưới, flex-end từ trái sang phải, từ dưới lên trên
                backgroundColor: 'springgreen',
            } }>
                <Text style={ {width: 50, height: 50, backgroundColor: 'red'} }></Text>
                <Text style={ {width: 50, height: 50, backgroundColor: 'blue'} }></Text>
                <Text style={ {width: 50, height: 50, backgroundColor: 'pink'} }></Text>
            </View>
        );
    }
}