import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import CheckText from './CheckText';

const partTitles = [ '前段', '中段', '后段', '其他' ];
export default class PartSelection extends Component {
  
  state = {
    selectCount: 0, //选中的个数
  };
  
  selectIds = []; //选中的id
  
  
  getPartTitle = (id) => {
    const index = parseInt(id / 100)-1;
    if (index < 3) {
      return partTitles[ index ];
    } else {
      return partTitles[ 3 ];
    }
  };
  
  renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View style={{
          height: 15,
          width: 4,
          backgroundColor: '#FDE000',
        }}/>
        <Text style={styles.titleText}>
          {this.getPartTitle(this.props.name[ 0 ].id)
          + '（' + this.state.selectCount + '/' +
          this.props.name.length + '）'}
        </Text>
      </View>
    );
  };
  
  renderCheckTexts = () => {
    return (
      <View style={styles.bottomContainer}>
        {this.props.name.map((item) => {
          return <View style={styles.checkTextContainer}><CheckText
            onPress={(id, state) => {
              console.log(id, state);
              if (state == true) {
                this.selectIds.push(id);
                this.setState((prevState) => {
                  return {selectCount: prevState.selectCount + 1};
                });
              } else {
                this.selectIds.splice(this.selectIds.indexOf(id), 1);
                this.setState((prevState) => {
                  return {selectCount: prevState.selectCount - 1};
                });
              }
              this.props.onItemPress(id, state);
            }}
            id={item.id}
            name={item.name}
          /></View>;
        })
        }
      </View>
    );
  };
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderTitle()}
        {this.renderCheckTexts()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'center'
  },
  titleText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#9D9DA1'
  },
  
  //todo 可能使用一个表示均分的UI形式 找UI对 属性叫。。。。xxbetween
  bottomContainer: {
    paddingLeft: 4,
    paddingRight: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  },
  checkTextContainer: {
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 24
  }
});

