import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
  ListView,
  ScrollView,
  Dimensions
} from 'react-native';
import TableBarWithAnim from './TableBarWithAnim';

const screenHeight = Dimensions.get('window').height;

export default class ScrollViewStudy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      float: false
    };
  }

  renderText = () => {
    return (<Text ref={(e) => {
      this.aboveText = e;
    }}>
      {'你好你好1\n'}
      {'你好你好2\n'}
      {'你好你好3\n'}
      {'你好你好4\n'}
      {'你好你好5\n'}
    </Text>);
  };

  renderTable = () => {
    return (
      <TableBarWithAnim
        ref={(e) => {
          this.tableBar = e;
        }}
        titleBottom={['趋势图', '各区域排行']}
        titleTop={['鉴定车', '问题车', '低电车', '沉默车']}
        doSome={this.doSome}
      />);
  };

  renderTableFloat = () => {
    return (
      <TableBarWithAnim
        style={styles.floatOnTop}
        ref={(e) => {
          this.tableBar = e;
        }}
        titleBottom={['趋势图', '各区域排行']}
        titleTop={['鉴定车', '问题车', '低电车', '沉默车']}
        doSome={this.doSome}
      />);
  };


  render() {
    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push({key: i, title: i + ''});
    }
    //todo scrollView到达某一位置不再接受scroll事件转而由内层FlatList处理
    return (
      <View>
        {this.state.float == true ?
          this.renderTableFloat() : null}
        <FlatList
          data={data}
          renderItem={({item}) => {
            if (item.key == 0) {
              return this.renderText();
            } else if (item.key == 1) {
              return this.renderTable();
            }
            return (<Text>{item.key}</Text>);
          }
          }
          onViewableItemsChanged={({viewableItems}) => {
            if (viewableItems[0].index != 0) {
                this.setState({float: true});
              }
            else {
              this.setState({float: false});
            }
          }}
        />
      </View>
    );
  }
  
  doSome = (url) => {
    console.log(url);
  };

  onChangeVisibleRows(visibleRows, changedRows) {
    console.log(visibleRows);
  }
}

const styles = StyleSheet.create({
  floatOnTop: {
    position: 'absolute',
    top: 0,
  }
});
