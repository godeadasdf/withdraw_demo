import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class PersonalInfo extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageNotification}
               source={require('../images/notifications.png')}/>
        
        <Image style={styles.imageAvatar}
               source={require('../images/avatar.png')}/>
        <View style={styles.viewForText}>
          <Text style={styles.textDays}>入职124天</Text>
        </View>
        <Text style={styles.textNamePhone}>陈晓涵 18632140212</Text>
        <Text style={styles.textPosition}>仓库管理员(北京)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 213,
    backgroundColor: '#3B516E',
    alignItems: 'center'
  },
  imageNotification: {
    marginTop: 16,
    marginRight: 16,
    alignSelf: 'flex-end',
  },
  imageAvatar: {
    marginTop: 16,
  },
  viewForText: {
    position:'absolute',
    top:112,
    height: 20,
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: '#3DA0FA',
    borderRadius:60,
  },
  textDays: {
    textAlign: 'center',
    fontSize: 10,
    color: '#fff',
    marginRight:6,
    marginLeft:6
  },
  textNamePhone:{
    marginTop:24,
    fontSize:16,
    color:'#fff',
  },
  textPosition:{
    marginTop:11,
    fontSize:14,
    color:'#fff',
    opacity:0.9
  }
});