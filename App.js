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
  ScrollView,
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
  
  selectIds = [];
  selectNames = [];
  
  data = [
    {
      'id': 101,
      'name': '闸把'
    },
    {
      'id': 102,
      'name': '把套'
    },
    {
      'id': 201,
      'name': '快拆'
    },
    {
      'id': 202,
      'name': '踏板'
    },
    {
      'id': 301,
      'name': '车锁'
    },
    {
      'id': 302,
      'name': '飞轮'
    },
    {
      'id': 401,
      'name': '未更换配件'
    }
  ];
  
  constructor(props) {
    super(props);
    this.onItemPress.bind(this);
  }
  
  handledPartData = [ [], [], [], [] ];
  
  handlePartData = () => {
    this.handledPartData = [ [], [], [], [] ];
    this.data.forEach((item) => {
      const index = parseInt(item.id / 100) - 1;
      this.handledPartData[ index ].push(item);
    });
  };
  
  renderPartSelect = () => {
    this.handlePartData();
    const parts = this.handledPartData.map((item, index) => {
      return (
        <View style={{flexDirection: 'column'}}>
          <PartSelection
            name={item}
            onItemPress={this.onItemPress}
          />
          {index == this.handledPartData.length - 1 ?
            null :
            <View style={styles.divideLine}/>}
        
        </View>
      );
    });
    return (
      <ScrollView style={{
        flex: 1,
        borderRadius: 9,
        paddingTop: 24
      }}>
        {parts}
      </ScrollView>
    );
  };
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderPartSelect()}
      </View>
    );
  }
  
  onItemPress = (id, state) => {
    if (state == true) {
      this.selectIds.push(id);
    } else {
      this.selectIds.splice(this.selectIds.indexOf(id), 1);
    }
    this.generatePartSet();//正常情况在调用提交时调用该方法
    console.log(this.selectIds);
    console.log(this.selectNames);
  };
  
  generatePartSet = () => {
    this.selectIds.sort((a, b) => {
      return a - b;
    });
    this.selectNames = [];
    for (let i = 0, j = 0; i < this.data.length; i++) {
      if (this.selectIds[ j ] == this.data[ i ].id) {
        this.selectNames.push(this.data[ i ].name);
        j++;
      }
    }
    
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  divideLine: {
    marginTop: 24,
    marginBottom: 24,
    height: 1,
    backgroundColor: '#E6E6E6'
  }
});
