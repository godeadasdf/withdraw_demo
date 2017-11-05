import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native';
import TableBarWithAnim from './TableBarWithAnim';

export default class ScrollViewStudy extends Component {
  
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([ 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2',
        'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2' ]),
    };
  }
  
  
  render() {
    //todo scrollView到达某一位置不再接受scroll事件转而由内层listview处理
    return (<ScrollView ref='scrollView'>
        <Text ref='infoAbove'>
          {'你好你好1\n'}
          {'你好你好2\n'}
          {'你好你好3\n'}
          {'你好你好4\n'}
          {'你好你好5\n'}
        </Text>
        <TableBarWithAnim
          ref='tableBar'
          titleBottom={[ '趋势图', '各区域排行' ]}
          titleTop={[ '鉴定车', '问题车', '低电车', '沉默车' ]}
          doSome={this.doSome}
        />
        <ListView
          ref='listBelow'
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{backgroundColor: '#fff'}}>{rowData}</Text>}
        />
      </ScrollView>
    );
  }
  
  doSome = (url) => {
    console.log(url);
  };
}