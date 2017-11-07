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
      maxLength: -1,
    };
  }
  
  render() {
    const data = this.sort(this.props.data.number);
    const titles = this.props.data.titles || [];
    const isDualLine = this.props.dualLine;
    const dualLengthFirst = this.state.maxLength > 0 ? this.state.maxLength * data[0].percent : 0;
    return (
      data && data.length > 0 ?
        <View style={styles.container}>
          <View>
            <Text style={styles.textTitle}>{titles[0]}</Text>
            <View style={styles.item_container}>
              <View
                onLayout={({nativeEvent: e}) => {
                  this.setState({maxLength: e.layout.width});
                }}
                ref='topOne' style={styles.topOne}/>
              <Text style={styles.textNumber}>{data[0].num}</Text>
            </View>
            {isDualLine == true ?
              <View style={styles.item_container}>
                <View style={{
                  height: 12,
                  backgroundColor: '#DEDEDE',
                  borderRadius: 10,
                  width: dualLengthFirst
                }}/>
                <Text style={styles.textNumber}>
                  {data[0].percent * 100 + '%'}
                </Text>
              </View> : null}
          </View>
          {
            data.map((item, index) => {
              let width = data[index].ratio * this.state.maxLength;
              let dualWidth = data[index].percent ? data[index].percent * width : 0;
              return index > 0 ? <View>
                <Text style={styles.textTitle}>{titles[index]}</Text>
                <View style={styles.item_container}>
                  <View ref='top' style={{
                    backgroundColor: '#FDE000',
                    width: width,
                    height: 12,
                    borderRadius: 10,
                  }}/>
                  <Text style={styles.textNumber}>
                    {data[index].num}
                  </Text>
                </View>
                {isDualLine == true ?
                  <View style={styles.item_container}>
                    <View style={{
                      height: 12,
                      backgroundColor: '#DEDEDE',
                      borderRadius: 10,
                      width: dualWidth
                    }}/>
                    <Text style={styles.textNumber}>
                      {data[index].percent * 100 + '%'}
                    </Text>
                  </View> : null}
              </View> : null;
            })}
        </View> : null
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
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item_container: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems:'center'
  },
  topOne: {
    flex: 1,
    height: 12,
    backgroundColor: '#FDE000',
    borderRadius: 10,
  },
  dualLine: {
    height: 12,
    backgroundColor: '#DEDEDE',
    borderRadius: 10,
    marginTop: 8,
  },
  textTitle: {
    marginTop: 17,
    marginRight: 16,
    fontSize: 12
  },
  textNumber: {
    marginLeft: 8,
    marginRight: 16,
    fontSize: 12,
    fontWeight:'bold'
  }
});