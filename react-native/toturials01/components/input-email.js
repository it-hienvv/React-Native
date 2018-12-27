import React, {Component} from 'react';
import {TextInput, View, Text, Keyboard} from 'react-native';

export default class InputEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            typedText: '',
            typedPassword: '',
        }
    }

    componentWillMount() {  // chạy khi lần đầu load component
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState( () => {
                return{
                    typedText: 'Keyboard is showed'
                }
            })
        });

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState( () => {
                return{
                    typedText: 'Keyboard is Hide'
                }
            })
        })
    }

    componentWillUnmount() { // Chạy khi thoát component
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return(
            <View>
                <TextInput
                    style={ {
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        margin: 10,
                        padding: 5,
                    } }
                    placeholder='Fill email'
                    keyboardType='email-address'
                    placeholderTextColor='black'
                    autoFocus={true} // auto khi load nó trỏ vào đây
                    returnKeyType='ok'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typedText: text
                                    }
                                }
                            );
                        } 
                    }
                >
                </TextInput>

                <Text
                    style={ {marginLeft: 10} }
                >
                   {this.state.typedText}
                </Text>
                <TextInput
                    style={ {
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        margin: 10,
                        padding: 5,
                    } }
                    placeholder='Fill password'
                    keyboardType='default'
                    placeholderTextColor='black'
                    secureTextEntry= {true}
                    returnKeyType='ok'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText= { 
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typedPassword: text
                                    }
                                }
                            );
                        }
                    }
                >

                </TextInput>

             
                <Text
                    style={ {marginLeft: 10} }
                >
                   {this.state.typedPassword}
                </Text>
            </View>
        );
    }
}