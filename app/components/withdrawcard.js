import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class SilentBikeDetail extends Component {


  renderImage(list) {
    return list.map(item => {
      return (<Image style={styles.image}
                     source={require('../images/avatar.png')}>
      </Image>);
    });


  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>沉默车详情</Text>
          <Image style={styles.close}
                 source={require('../images/close.png')}/>
        </View>
        <View style={styles.divide}></View>
        <View style={styles.numberContainer}>
          <Text style={styles.content}>车牌号：</Text>
          <Text style={styles.bikeno}>8474832</Text>
        </View>
        <Text style={styles.content}>上报地址：海淀黄庄地铁A口</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.content, {flex: 1}]}>上报时间：10月30日 10:30</Text>
          <Text style={styles.timeout}>超过36小时</Text>
        </View>
        <View style={styles.imageContainer}>
        {this.renderImage([1,2])}
        </View>
        <View style={styles.button}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      alignSelf: 'stretch'
    },
    topContainer: {
      flexDirection: 'row',
      height: 72
    },
    title: {
      flex: 1,
      marginTop: 30,
      fontSize: 18,
      textAlign: 'center',
      color: '#333333'
    },
    close: {
      width: 14,
      height: 14,
      top: 32,
      right: 24,
      position: 'absolute'
    },
    divide: {
      backgroundColor: '#CCCCCC',
      height: 1
    },
    numberContainer: {
      marginTop: 30,
      flexDirection: 'row'
    },
    bikeno: {
      color: '#333333',
      fontSize: 18,
      backgroundColor: '#fff'
    },
    content: {
      marginLeft: 24,
      marginTop: 17,
      color: '#292929',
      fontSize: 14
    },
    timeout: {
      color: '#FF7B00',
      fontSize: 14,
      marginTop: 17,
      position: 'relative',
      right: 16
    },
    imageContainer: {
      marginTop: 30,
      marginLeft: 7,
      marginRight: 20,
      flexDirection: 'row'
    },
    image: {
      width: 98,
      height: 98,
      marginLeft: 13,
    },
    button: {
      marginTop: 24,
      height: 54,
      backgroundColor: '#3DA0FA'
    }
  }
);
