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
import CheckText from './app/components/CheckText';
import PartSelection from './app/components/PartSelection';


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
        {/*<PersonalInfo/>
        <ScrollViewStudy/>*/}
        {/* <SingleAxisChart
          data={{
            number: [
              {id: 1, num: 560, percent: 0.77},
              {id: 2, num: 900, percent: 0.80},
              {id: 3, num: 823, percent: 0.90},
              {id: 4, num: 1010, percent: 0.59}
            ], titles: [
              '北京海淀黄庄地铁站A口',
              '北京中关村地铁站A口',
              '北京知春路地铁站B口',
              '北京中关村购物中心'
            ],
            topTitles:[
              '问题车',
              '问题车入库率'
            ]
          }}
          dualLine={true}

        />*/}
{/*        <CheckText
          id={101}
          partname='前把'
        />*/}
        <PartSelection
          partname={[{id:401,partname:'前把'},{id:402,partname:'链条'}
          ,{id:403,partname:'前把'},{id:403,partname:'前把'},{id:404,partname:'前把'},
            {id:405,partname:'前把'},{id:406,partname:'前把'},{id:407,partname:'前把'},]}
        />
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems:'flex-start',
    backgroundColor: '#436',
  },
});
