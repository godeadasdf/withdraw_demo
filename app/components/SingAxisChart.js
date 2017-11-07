import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SingleAxisChart extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      maxLength: -1
    };
  }
  
  render() {
    const data = this.sort(this.props.data.number);
    const titles = this.props.data.titles;
    return (
      <View style={styles.container}>
        <View>
          <Text>{titles[0]}</Text>
        <View style={styles.item_container}>
          <View
            onLayout={({nativeEvent: e}) => {
              this.setState({maxLength: e.layout.width});
            }}
            ref='topOne' style={styles.topOne}/>
          <Text>{data[ 0 ].num}</Text>
        </View>
        </View>
        {
          data.map((item, index) => {
            let width = data[ index ].ratio * this.state.maxLength;
            console.log(width);
            console.log(this.state.maxLength);
            return index > 0 ? <View>
              <Text>{titles[index]}</Text>
              <View style={styles.item_container}>
                <View ref='top' style={{
                  backgroundColor: '#FDE000',
                  width: width,
                  height: 12
                }}/>
              <Text>{data[ index ].num}</Text>
              </View></View> : null;
          })}
      </View>
    );
  }
  
  sort = (data) => {
    for (let i = data.length - 1; i >= 0; i--) {
      for (let j = i; j < data.length - 1; j++) {
        if (data[ j + 1 ].num > data[ j ].num) {
          let temp = data[ j ];
          data[ j ] = data[ j + 1 ];
          data[ j + 1 ] = temp;
        }
      }
    }
    for (let i = 0; i < data.length; i++) {
      data[ i ].ratio = (data[ i ].num / data[ 0 ].num).toFixed(2);
    }
    return data;
  };
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  item_container: {
    height: 37,
    flexDirection: 'row',
  },
  topOne: {
    flex: 1,
    height: 12,
    backgroundColor: '#FDE000'
  },
  text: {
    marginLeft: 8,
    marginRight: 16,
    fontSize: 12
  }
});