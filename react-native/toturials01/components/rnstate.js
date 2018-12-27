import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

class Blink extends Component {
    constructor(params) { // tùy ý truyền vào 
        super(params);
        this.state = {
            showText: true  // khai báo 1 state cho thằng này
        };

        setInterval(() => {
            this.setState(previousState => { // muốn thay đổi state bắt buộc phải dùng setSate
                return {
                    showText: !previousState.showText
                };
            });
        }, 1000);
    }

    render() {
        let textDisplay =  this.state.showText ? this.props.inputText: " ";
        return(
            <Text>{textDisplay}</Text>        
        );
    }

}

export default class TextBlink extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Blink inputText="Hello, how are you?" ></Blink>
                <Blink inputText="Hello, how are you?" ></Blink>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'red',
    }
});