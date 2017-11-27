import React, { Component } from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  View,
  StyleSheet
} from 'react-native';


export type Props = {
  cancelable: boolean,  //是否显示右上角close
  content: Array,
  positiveButton: {
    title: string,
    action: () => void,
  },
  negativeButton: {
    title: string,
    action: () => void,
  },
  dismiss: () => void
}


export default class AlertModalPureText extends Component<Props> {
  
  renderClose() {
    const cancelable = this.props.cancelable == undefined ? true : this.props.cancelable;
    return (
      <TouchableWithoutFeedback
        onPress={this.props.dismiss}
      >
        <View style={styles.closeContainer}>
          {cancelable ?
            <Image style={styles.close}
                   source={require('./img/close.png')}/>
            : null}
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  //不设置button时默认动作为dismiss
  renderButton() {
    if (this.props.negativeButton == undefined) {
      return (
        <TouchableHighlight
          style={{borderBottomLeftRadius: 9, borderBottomRightRadius: 9}}
          underlayColor='#ECD100'
          onPress={this.props.positiveButton.action ? this.props.positiveButton.action : this.props.dismiss}>
          <View style={styles.singleButtonContainer}>
            <Text style={styles.singleButton}>
              {this.props.positiveButton ? this.props.positiveButton.title : '确定'}
            </Text>
          </View>
        </TouchableHighlight>);
    } else {
      return (
        <View style={styles.dualButtonContainer}>
          <TouchableHighlight
            underlayColor='#E1E1E1'
            style={{borderBottomLeftRadius: 9}}
            onPress={this.props.positiveButton.action ? this.props.positiveButton.action : this.props.dismiss}>
            <View style={[ styles.singleButtonContainer,
              {width: 143.5, borderBottomRightRadius: 0, backgroundColor: '#F1F1F1'} ]}>
              <Text style={styles.singleButton}>
                {this.props.positiveButton ? this.props.positiveButton.title : '取消'}
              </Text>
            </View>
          </TouchableHighlight>
          <View style={{width: 1, height: 48, backgroundColor: '#FFFFFF'}}/>
          <TouchableHighlight
            style={{borderBottomRightRadius: 9}}
            underlayColor='#ECD100'
            onPress={this.props.negativeButton.action ? this.props.negativeButton.action : this.props.dismiss}>
            <View style={[ styles.singleButtonContainer, {width: 143.5, borderBottomLeftRadius: 0} ]}>
              <Text style={styles.singleButton}>
                {this.props.negativeButton ? this.props.negativeButton.title : '确定'}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }
  
  
  renderItems() {
    return (<View style={styles.textItemContainer}>
      {this.props.content && this.props.content.map((item, index) => {
          let pos = item.indexOf(':');
          return <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text>
              {item.slice(0, pos)}
              <Text>{item.slice(pos, item.length)}</Text>
            </Text>
          </View>;
        }
      )}
    </View>);
  }
  
  render() {
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.dialogContainer}>
            {this.renderClose()}
            {this.renderItems()}
            {this.renderButton()}
          </View>
        </View>
      </Modal>
    );
  }
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000050',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContainer: {
    borderRadius: 9,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  closeContainer: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 12,
  },
  textItemContainer: {
    width: 256,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 16,
    marginRight: 16,
  },
  singleButtonContainer: {
    flexDirection: 'row',
    width: 288,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDE000',
    height: 48,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
  singleButton: {
    textAlign: 'center',
    fontSize: 14,
    color: '#292929',
    fontWeight: 'bold'
  },
  dualButtonContainer: {
    flexDirection: 'row'
  }
});
