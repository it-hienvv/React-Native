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
    FlatList,
    Platform,
} from 'react-native';
import Button from  'react-native-button';
import dataList from "../data/flat-list-data";
import Swipeout from 'react-native-swipeout'; // dùng để bắt sự kiện vuốt sang trái hoặc phải 
import imgSource from './img-src';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');

export default class AddModal extends React.Component {
    constructor(props) {
        super(props);
    }

    showModal = ()=>{
        this.refs.myModal.open();
    }
    render() {
        return(
            <Modal
                style={{
                    justifyContent: 'center',  // giua màn hình 
                    borderRadius: Platform.OS === 'ios'? 30: 0, // bo tròn
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280,
                    backgroundColor: 'mediumseagreen'
                }}
                position= 'center' // vị trí ở giưaux
                backdrop= {true}
                onClosed= {()=>{
                    Alert.alert("Closeed");
                }}
                ref={'myModal'}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 5,
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                        marginBottom: 10,
                    }}
                >New Food's
                </Text>

                <TextInput
                    style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                        height: 50,
                        marginLeft: 40,
                        marginBottom: 10,
                        marginRight: 30,
                    }}
                    autoFocus={true}
                    keyboardType= 'default'
                    placeholder="Enter food's name"
                >
                    
                </TextInput>

                <TextInput
                    style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                        height: 50,
                        marginLeft: 40,
                        marginBottom: 150,
                        marginRight: 30,
                    }}
                    keyboardType= 'numeric'
                    placeholder="Enter prices"
                >
                    
                </TextInput>
            </Modal>
        );
    }
}

