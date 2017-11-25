import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default class RounderCornerTitle extends PureComponent {
  
  render() {
    return(
    <View style={{
      alignSelf:'stretch',
      height: 24,
      borderRadius: 9,
      backgroundColor: '#fff',
      flexDirection:'column'
    }}>
      <View style={{height: 15,
        marginTop: 9,
        flex:1,
        backgroundColor: '#fff'}}/>
    </View>);
  }
}