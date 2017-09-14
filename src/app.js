
'use strict';
import Style from './Style';
import React,{AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Component,
  ScrollView} from 'react-native';
import Panel from './components/Panel';

export default class App extends Component {

  constructor(props) {
     super(props);
  }

  render() {
    return (
      <ScrollView style={ Style.list_container}>

               <Text style={{ fontSize: 23,
                padding:3,
                textAlign: 'center',
                color: '#009688',}}>
                Expandable List
                </Text>

        <Panel title="Title 1">
        <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: .5, flexDirection: 'column'}} >
                 <Text style={Style.list_sub_header}> SubTitle 1 </Text>
                 <Text style={Style.list_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </View>
              <View style={{flex: .5}} >
                <Image source={require('./assets/img/user_place_holder.jpg')}
              />
              </View>
         </View>
        </Panel>

        <Panel title="Title 2">
        <View style={{flex: 1, flexDirection: 'row'}}>
                 <View style={{flex: .5, flexDirection: 'column'}} >
                 <Text style={Style.list_sub_header}> SubTitle 2 </Text>
                 <Text style={Style.list_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </View>
              <View style={{flex: .5}} >
                <Image source={require('./assets/img/user_place_holder.jpg')}
              />
              </View>
         </View>
        </Panel>

        <Panel title="Another Panel">
        <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: .5, flexDirection: 'column'}} >
                 <Text style={Style.list_sub_header}> SubTitle 3 </Text>
                 <Text style={Style.list_item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </View>
              <View style={{flex: .5}} >
                <Image source={require('./assets/img/user_place_holder.jpg')}
              />
              </View>
         </View>
        </Panel>

      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
