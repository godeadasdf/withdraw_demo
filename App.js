/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';
import PartSelection from './app/components/PartSelection';
import RounderCornerTitle from './app/components/RounderCornerTitle';
import PartSelectionDetail from './app/components/PartSelectionDetail';

//todo制作圆角小盖头
export default class App extends Component<{}> {
  
  selectIds = [];
  selectNames = [];
  
  state = {
    selectNum: 0,
    showSelectionDetail: false,
    data: [
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
    ],
    bilateral: [ 101, 102, 202 ]
  };
  
  //获取配件信息
  fetchPartNames = (token) => (onSuccess, onFailure) => {
  
  };
  
  //提交上报问题
  submitPartIds = (token, bicycleNo, partArray, user_id) => (onSuccess, onFailure) => {
  
  };
  
  //展示异常情况
  renderAlertDialog = (message) => {
  
  };
  
  constructor(props) {
    super(props);
    this.onItemPress.bind(this);
  }
  
  componentWillMount() {
  
  }
  
  handledPartData = [ [], [], [], [] ];
  
  handlePartData = () => {
    this.handledPartData = [ [], [], [], [] ];
    this.state.data.forEach((item) => {
      const index = parseInt(item.id / 100) - 1;
      this.handledPartData[ index ].push(item);
    });
  };
  
  renderPartSelect = () => {
    this.handlePartData();
    const parts = this.handledPartData.map((item, index) => {
      return (
        <View style={{
          flexDirection: 'column',
          backgroundColor: '#fff',
        }}>
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
        backgroundColor: '#fff',
      }}>
        <View style={{
          backgroundColor: '#fff',
          flex: 1
        }}>
          {parts}
        </View>
      </ScrollView>
    );
  };
  
  renderSubmitButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[ styles.submitButton,
            this.state.selectNum > 0 ?
              {backgroundColor: '#FDE000'}
              : {backgroundColor: '#C4C4C4'} ]}
          underlayColor={this.state.selectNum > 0 ? '#ecd100' : '#e1e1e1'}
          onPress={() => {
            if (this.selectIds.length > 0) {
              this.setState({showSelectionDetail: true});
            } else {
            
            }
          }}>
          <Text style={styles.buttonText}>提交</Text>
        </TouchableHighlight>
      </View>
    );
  };
  
  renderSelectionDetail = () => {
    return (<View style={styles.cover}>
      <View style={{flex: 1}}/>
      <PartSelectionDetail
        onClose={this.onClose}
        name={this.selectNames}/>
    </View>);
  };
  
  render() {
    return (
      <View style={styles.container}>
        <RounderCornerTitle/>
        {this.renderPartSelect()}
        {this.renderSubmitButton()}
        {this.state.showSelectionDetail ? this.renderSelectionDetail() : null}
      </View>
    );
  }
  
  generatePartSet = () => {
    this.selectIds.sort((a, b) => {
      return a - b;
    });
    this.selectNames = [];
    for (let i = 0, j = 0; i < this.state.data.length; i++) {
      if (this.selectIds[ j ] == this.state.data[ i ].id) {
        this.selectNames.push('【' + this.state.data[ i ].name + '】');
        j++;
      }
    }
    
  };
  
  onItemPress = (id, state) => {
    if (state == true) {
      this.selectIds.push(id);
    } else {
      this.selectIds.splice(this.selectIds.indexOf(id), 1);
    }
    this.generatePartSet();//正常情况在调用提交时调用该方法
    console.log(this.selectIds);
    console.log(this.selectNames);
    this.setState({selectNum: this.selectIds.length});
  };
  
  onClose = () => {
    this.setState({showSelectionDetail: false});
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#40434e'
  },
  divideLine: {
    marginTop: 8,
    marginBottom: 24,
    height: 1,
    backgroundColor: '#E6E6E6'
  },
  buttonContainer: {
    backgroundColor: '#fff',
    paddingBottom: 16,
    paddingTop: 16
  },
  submitButton: {
    height: 48,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9
  },
  buttonText: {
    fontSize: 14,
    color: '#292929',
    fontWeight: 'bold'
  },
  cover: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.8)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999999999
  }
});
