/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WithdrawCard from './app/components/withdrawcard';
import PersonalInfo from './app/components/personalinfo';
import TableBarWithAnim from './app/components/TableBarWithAnim';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <PersonalInfo/>
        <TableBarWithAnim
          titleBottom={['趋势图', '各区域排行']}
          titleTop={['鉴定车', '问题车','低电车','沉默车']}
          doSome={this.doSome}
        />
      </View>
    );
  }

  doSome = (url) => {
    console.log(url);
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection:'column',
    alignItems: 'stretch',
    backgroundColor: '#436',
  },
});
