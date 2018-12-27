// file này học private class 

import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

// private classs, chỉ có thể gọi bởi chính nó
class SayHello extends React.Component {
    render() {
        let mytext = `
            Hello ${this.props.name}. How are you ?
        `;
        return (
            <Text style={styles.container}>{mytext}</Text>
        );
    }
}

export default class modifier extends React.Component {
    render() {
        return (
            <View
 
            >
                <SayHello name="Vu Van Hien"></SayHello>
                <SayHello name="Le Quoc An"></SayHello>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'red',
    }
});

