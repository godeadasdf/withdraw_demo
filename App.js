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
import ScrollViewStudy from './app/components/ScrollViewStudy';
import SingleAxisChart from './app/components/SingAxisChart';


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
        <ScrollViewStudy/>
        {/*<SingleAxisChart
          data={[
            {id: 1, num: 560},
            {id: 2, num: 900},
            {id: 3, num: 823},
            {id: 4, num: 1010}
          ]}/>*/}
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#436',
  },
});
