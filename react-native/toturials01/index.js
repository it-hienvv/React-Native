/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import './ReactotronConfig';
// import helloworld from './components/helloworld';
import robot from './components/robot';
import modifier from './components/modifier';
import TextBlink from './components/rnstate';
import RNFixed from './components/rnfixed';
import FlexExample from './components/flex-example';
import ButtonRN from './components/button-rn';

AppRegistry.registerComponent(appName, () => RNFixed);
