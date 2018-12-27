// Mr Hien Vu 
// Email: hienvv@vinsofts.net

import React, {Componnent} from 'react';
import {Text} from 'react-native';
 
// export = public // default mặc định khi sử dụng nó sẽ sử dụng tên hello world
// Để gọi được file này thì bên file index.js cần import nó
export default class helloworld extends React.Component {
    render() {
        // khai báo let thì k thể thay đổi kiểu dữ liệu cho nó
        // khi đã khai báo
        let mytext = `Im Hien Vu` + `</br>` + `Im come`;
        return(
            <Text>{mytext}</Text>
        );
    }
}