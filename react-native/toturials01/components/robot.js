import React, {Componnent} from 'react';
import {Image} from 'react-native';

export default class robot extends React.Component {
    render() {
        return (
            <Image  source={ {uri: "https://lh4.googleusercontent.com/-t20xgx0LJXY/U2xBYO2jSFI/AAAAAAAAF2w/xWb1mPJJrDU/s800/robot-kamp-chien-binh-vu-tru-c-type-552004-2.jpg"} }
                    style={ {width: 200, height: 200}}
            > 
            </Image>
        );
    }
}