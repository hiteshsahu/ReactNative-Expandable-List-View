
'use strict';
import React,{AppRegistry,StyleSheet,Text,ScrollView,Component} from 'react-native';
import App from './src/app';
export default class Panels extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('Panels', () => Panels);
