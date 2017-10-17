import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  ToastAndroid
} from 'react-native';

//todo button background属性替换
export default class WithdrawCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewForTextStyle}>
          <Text style={styles.text}>提现记录</Text>
        </View>
        <Text style={styles.balanceTitle}>  余额（元）</Text>
        <Text style={styles.balanceNumber}>0.00</Text>
        <View style={styles.viewForButtonStyle}>
          <Text onPress={() => {
            console.log('click');
          }}
                style={styles.button}>提现</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 214,
    flexDirection: 'column'
  },
  viewForTextStyle: {
    height: 28,
    width: 78,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 39,
  },
  text: {
    color: '#666666',
    fontSize: 14,
    textAlign: 'center',
  },
  balanceTitle: {
    marginTop: 12,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  balanceNumber: {
    marginTop: 6,
    color: '#000',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
    
  },
  viewForButtonStyle: {
    marginTop:10,
    height: 48,
    marginRight:16,
    marginLeft:16,
    justifyContent: 'center',
    alignSelf:'stretch',
    borderRadius: 3,
    backgroundColor: '#3DA0FA',
  },
  button: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold'
  }
});