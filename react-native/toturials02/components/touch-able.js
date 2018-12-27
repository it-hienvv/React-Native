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

export default class TouchAbleRn extends React.Component {
    render() {
        return(
            <View
                style={styles.container}
            >
                <TouchableHighlight
                
                >
                    <View>
                        <Image
                            style={ {width: 100, height:40} }
                            source={require('../Images/btn.png')}
                        >
                        </Image>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'green', 
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