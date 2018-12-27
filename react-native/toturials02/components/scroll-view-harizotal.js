import React, {Component} from 'react';
import { img } from './img-src';
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

export default class ScrollHarizoltalRn extends React.Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView
                horizontal={true}  // cho phép scroll theo chiều ngang
                pagingEnabled={true} // cho phép lật trang
                showsHorizontalScrollIndicator={false}
                onMomentumScrollBegin={() =>{
                    Alert.alert("You scrolling");
                }}
                onScroll = {(event) =>{
                    let log = event.nativeEvent.contentOffset.x;
                    console.log(log);
                }}
                scrollEventThrottle= {10}// cứ 10 s sẽ lưu sự kiện on scroll
            >
                <View
                    style={{
                        flex: 1,
                        width: screenWidth,
                        backgroundColor: 'green',
                        padding: 10,
                        alignItems: "center",
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 5,
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                    Screen 1
                    </Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        width: screenWidth,
                        backgroundColor: 'blue',
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: "center",


                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 5,
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                    Screen 2
                    </Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        width: screenWidth,
                        backgroundColor: 'yellow',
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: "center",


                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            padding: 5,
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                    Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}