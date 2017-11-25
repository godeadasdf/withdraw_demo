import React, { PureComponent } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import RounderCornerTitle from './RounderCornerTitle';

export default class PartSelectionDetail extends PureComponent {
  
  renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Image source={require('../images/close.png')}
               style={styles.closeImage}/>
        <Text style={styles.titleText}>
          已选择配件
        </Text>
      </View>
    );
  };
  
  renderContents = (name) => {
    const names = name.map((item) => {
      return (<Text style={styles.textItem}>
        {item}
      </Text>);
    });
    return <View style={styles.contentContainer}>
      {names}
    </View>;
  };
  
  renderSubmitButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.submitButton}>
          <Text style={styles.buttonText}>提交</Text>
        </TouchableHighlight>
      </View>
    );
  };
  
  render() {
    return (
      <View style={styles.container}>
        <RounderCornerTitle/>
        {this.renderTitle()}
        <View style={styles.divideLine}/>
        <View style={{backgroundColor: '#fff', paddingBottom: 16}}>
          {this.renderContents([ '【闸把】', '【闸把】', '【闸把】','【闸把】', '【闸把】', '【闸把】' ])}
          {this.renderSubmitButton()}
        </View>
      </View>
    );
  };
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    height: 36,
  },
  closeImage: {
    marginLeft: 16,
    width: 14.3,
    height: 14.3
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold'
  },
  divideLine: {
    height: 1,
    backgroundColor: '#E6E6E6'
  },
  contentContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    paddingTop: 31,
    paddingBottom: 23,
  },
  textItem: {
    marginLeft: 6,
    marginRight: 8,
    color: '#666666',
    fontSize: 16
  },
  submitButton: {
    height: 48,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    backgroundColor: '#FDE000'
  },
  buttonText: {
    fontSize: 14,
    color: '#292929',
    fontWeight: 'bold'
  }
});