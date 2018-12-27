import React, {Component} from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import Button from 'react-native-button';

export default class ButtonRN extends React.Component {
    _onPressButton = () => {
        Alert.alert("You have press button!");
    }
    render() {
        return(
            <View style={styles.container}>
                <Button style={
                        styles.button
                    }
                    onPress={this._onPressButton}
                >
                    Click 
                </Button>
            </View>
        );
    }
}

const styles = {
    container:  {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: 'black',
        padding: 10,
        borderRadius: 16,
        shadowRadius: 20,
        shadowOpacity: 0.5,
        fontSize: 20,
        backgroundColor: 'green',
        width: 200,
    } 
}