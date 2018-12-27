import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StyleSheet,
    View,
    Alert,
} from 'react-native';
import Button from  'react-native-button';

export default class BTN extends React.Component {
    _onPressButton = () => {
        Alert.alert("You press");
    }
    render() {
        return(
            <View
                style={styles.container}
            >
                <Button
                    style={styles.btn}
                    onPress= {this._onPressButton}
                >
                    Click
                </Button>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: 'green',
        color: 'white',
        padding: 5,
        borderRadius: 10,
        shadowRadius: 20,
        shadowOpacity: 0.5,
    }
}