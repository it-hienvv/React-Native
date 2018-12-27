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
    ScrollView,
    Dimensions,
    TextInput,
} from 'react-native';
import Button from  'react-native-button';

export default class ScrollViewRn extends React.Component {

    render() {
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView
                style={{
                    padding: 10,
                }} 
                maximumZoomScale={3} // không có tác dụng trên android
                minimumZoomScale={0.2} // không có tác dụng trên android
                keyboardDismissMode='on-drag' // khi kéo scroll thì bàn phím sẽ bị mất 
            >
                <Image 
                    source={require('../Images/btn.png')}
                    style={{width: screenWidth, height: screenWidth * 480/960 }}
                >
                </Image>
                <TextInput
                    style={{
                        padding: 5,
                        margin: 5,
                        color: 'black',
                        borderBottomColor: 'black',
                        borderBottomWidth:1,
                    }}
                    placeholder='Type text'
                >

                </TextInput>

                <Image 
                    source={require('../Images/btn.png')}
                    style={{width: screenWidth, height: screenWidth * 480/960 }}
                >
                </Image>

                <Image 
                    source={require('../Images/btn.png')}
                    style={{width: screenWidth, height: screenWidth * 480/960 }}
                >
                </Image>

                <Image 
                    source={require('../Images/btn.png')}
                    style={{width: screenWidth, height: screenWidth * 480/960 }}
                >
                </Image>

                <Image 
                    source={require('../Images/btn.png')}
                    style={{width: screenWidth, height: screenWidth * 480/960 }}
                >
                </Image>
                
                <Image 
                    source={require('../Images/btn.png')}
                    style={{width: screenWidth, height: screenWidth * 480/960 }}
                >
                </Image>

                <Image 
                    source={require('../Images/btn.png')}
                    style={{width: screenWidth, height: screenWidth * 480/960 }}
                >
                </Image>
            </ScrollView>
        );
    }
}