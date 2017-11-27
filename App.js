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
import AlertModalView from './app/AlertModalView';

//单button


export default class App extends Component<{}> {

  state = {
    showAlert: true
  }

  render() {
    return (
      <View>
        {this.state.showAlert ?
          <AlertModalView
            cancelable={false}
            type='error'
            dismiss={this.onClose}
            subtitle='副标题文案文案文案文案文案文案'
            positiveButton={{
              title: '好的',
              action: this.onClose
            }}
            negativeButton={{
              title: '不好',
              action: this.onClose
            }}
          />
          : null}
      </View>);
  }

  onClose = () => {
    this.setState({showAlert: false});
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
  bottomContainer: {
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
