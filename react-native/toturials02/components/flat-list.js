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
import AddModal from './add-modal';

class FlatListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: null,
        }
    }
    render() {
        const swipeoutSetting = {
            autoClose: true,
            onClose: (sessionID, rowId, direction) => { // sự kiện khi đóng thẻ kéo ngang
                if(this.props.item.key != null) {
                    this.setState({selectedKey: null});
                }
            },
            onOpen: (sessionID, rowId, direction) => { // sự kiện khi đóng thẻ kéo ngang
                this.setState({selectedKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow =  this.state.selectedKey;
                            Alert.alert(
                                'Alert',
                                'You want delete',
                                [
                                    {text: 'No', onPress: () => {console.log('Cancel delete')}, style: 'cancel'},
                                    {text: 'yes', onPress: () =>{
                                        dataList.splice(this.props.index, 1);   
                                        console.log(this.props.index);
                                        //refresh flatlist
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }},
                                ],
                                {cancelable: true} // bị mất đi nếu bấm ra ngoài cái form alert
                            )
                    },
                    // component: (
                    //     <View
                    //         style={{
                    //             minHeight: 100,
                    //             backgroundColor: 'red',        
                    //         }}
                    //     >
                    //     <Text>Delete</Text>
                    //     </View>
                    // ),
                    text: 'Delete', 
                    type: 'delete',
                }
            ],
            rowID: this.props.index,
            sessionID: 1,  
        };
        return(
            <Swipeout 
            {...swipeoutSetting}
            >
                <View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row", // nghĩa là những thằng nào trong nó sẽ chạy theo row hàng 
                            minHeight: 100,
                            // backgroundColor: this.props.index % 2== 0 ? 'blue': 'green',
                            backgroundColor: 'mediumseagreen',
                        }}
                    >
                        <Image
                            source={{ uri: this.props.item.urlImg }}
                            style={{
                                width: 100,
                                minHeight: 100,
                            }}
                        >

                        </Image>
                        <View
                            style={{ // thằng này sẽ chiếm hết phần còn lại vì flex nó là 1,  và sẽ chạy theo hàng
                                flex: 1,
                                flexDirection: 'column', // nghĩa là thằng nào chạy trong đó sẽ chạy theo cột
                                marginLeft: 40,
                                padding: 20, // flex start bắt đầu từ trái sang phải từ trên xuống dưới, flex-end từ trái sang phải, từ dưới lên trên
                            }}
                        >
                            <Text style={{ marginBottom: 10}}>{this.props.item.name}</Text>
                            <Text>{this.props.item.prices}</Text>
                        </View>


                    </View>
                    
                    <View style={{height: 2, backgroundColor: 'white'}}>

                    </View>
                </View>
            </Swipeout>
        );
    }
}

export default class FlatListRn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            deletedRowKey: null // khi mà state của 1 thằng nào thay đổi, thì component nó sẽ tự load lại
        }
        this._onPressAdd = this._onPressAdd.bind(this); // thay đổi thằng this của sự kiện _onPressAdd bằng thằng this của  FlatListRn
    }
    refreshFlatList = (deletedKey) => {
        this.setState((previousState) => {
            return{
                deletedRowKey: deletedKey
            }; 
        });
    }
    _onPressAdd = ()=> {
            this.refs.addModal.showModal();
    }
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    marginTop: Platform.OS == 'ios'? 34: 0,
                }}
            >
                <View
                    style={{
                        height: 40,
                        backgroundColor: 'tomato',
                        marginBottom: 2,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <TouchableHighlight
                        underlayColor='tomato'
                        onPress= {this._onPressAdd}
                    >
                        <Image
                            source= {imgSource.add}
                            style={{
                                marginRight: 10,
                            }}
                        >
                        </Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={dataList}
                    ListEmptyComponent={() => {
                        return (
                            <View></View>
                        );
                    }}
                    renderItem={({item, index})=>{
                        return(
                            <FlatListItem
                                item={item}
                                index={index}
                                parentFlatList={this}
                            >
                            </FlatListItem>    
                        );
                    }}

                >

                </FlatList>
                <AddModal
                    ref={'addModal'}
                    parentFlatList={this}
                >

                </AddModal>
            </View>
        );
    }
}