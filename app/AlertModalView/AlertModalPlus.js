import React, {Component} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  View,
  StyleSheet
} from 'react-native';

export type AlertType = 'success' | 'warnning' | 'error';

export type Props = {
  cancelable: boolean,  //是否显示右上角close
  type: AlertType,
  title: string,
  subTitle: string,
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


export default class AlertModalPlus extends Component<Props> {


  getIcon() {
    switch (this.props.type) {
      case 'success':
        return require('./img/success.png');
      case 'warning':
        return require('./img/warning.png');
      case 'error':
        return require('./img/error.png');
      default:
        return require('./img/success.png');
    }
  }

  renderImage() {
    return (
      <Image style={styles.image}
             source={this.getIcon()}/>
    );
  }

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

  renderTitle() {
    return (
      <View style={styles.titleContainer}>
        {this.props.title !== undefined ?
          <Text style={styles.title}>
            {this.props.title}
          </Text> : null}
        {this.props.subtitle !== undefined ?
          <Text style={styles.subtitle}>
            {this.props.subtitle}
          </Text> : null}
      </View>
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
            <View style={[styles.singleButtonContainer,
              {width: 143.5, borderBottomRightRadius: 0, backgroundColor: '#F1F1F1'}]}>
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
            <View style={[styles.singleButtonContainer, {width: 143.5, borderBottomLeftRadius: 0}]}>
              <Text style={styles.singleButton}>
                {this.props.negativeButton ? this.props.negativeButton.title : '确定'}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
  }

  render() {

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.dialogContainer}>
            {this.renderImage()}
            <View style={styles.contentContainer}>
              <View style={styles.topContainer}>
                {this.renderClose()}
                {this.renderTitle()}
              </View>
              {this.renderButton()}
            </View>
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
    alignItems: 'center',
    marginBottom: 187
  },
  image: {
    width: 160,
    height: 110,
    zIndex: 999999
  },
  contentContainer: {
    position: 'absolute',
    top: 50,
    width: 288
  },
  topContainer: {
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    backgroundColor: '#FFFFFF'
  },
  titleContainer: {
    marginTop: 46,
    marginBottom: 24
  },
  closeContainer: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 12
  },
  close: {
    width: 14.3,
    height: 14.3,
  },
  title: {
    textAlign: 'center',
    color: '#292929',
    marginTop: 6,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginRight: 16
  },
  subtitle: {
    textAlign: 'center',
    color: '#292929',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 16,
    marginRight: 16
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
