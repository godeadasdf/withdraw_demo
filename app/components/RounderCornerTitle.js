import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default class RounderCornerTitle extends PureComponent {
  
  render() {
    const color = this.props.color ? this.props.color : '#fff';
    return (
      <View style={{
        alignSelf: 'stretch',
        height: 24,
        borderRadius: 9,
        flexDirection: 'column',
        backgroundColor: color
      }}>
        <View style={{
          height: 15,
          marginTop: 9,
          flex: 1,
          backgroundColor: color
        }}/>
      </View>);
  }
}