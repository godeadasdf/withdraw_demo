import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

export default class TableBarWithAnim extends Component {

  constructor(props) {
    super(props);
    this.state = {
      indexChoseTop: 0,
      indexChoseBottom: 0
    };
  }

  componentWillMount() {
    this.props.doSome(this.props.titleBottom[0] + this.props.titleTop[0]);
  }

  renderTopItem = (item, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({indexChoseTop: index});
          this.props.doSome(this.props.titleBottom[this.state.indexChoseBottom]
            + this.props.titleTop[index]);
        }}>
        <View style={styles.textContainerTop}>
          <Text style={index == this.state.indexChoseTop ?
            styles.textChosenWhite : styles.textNormalWhite}>
            {item}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderBottomItem = (item, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({indexChoseBottom: index});
          this.props.doSome(this.props.titleBottom[index]
            + this.props.titleTop[this.state.indexChoseTop]);
        }}>
        <View style={styles.textContainerBottom}>
          <Text style={index == this.state.indexChoseBottom ?
            styles.textChosenBlack : styles.textNormalBlack}>
            {item}
          </Text>
          {index == this.state.indexChoseBottom ?
            <View style={styles.line}/> : null}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={styles.container}>
          {this.props.titleTop
            && this.props.titleTop.length > 0 ?
              this.props.titleTop.map((item, index) =>
                this.renderTopItem(item, index)
              ) : null}
        </View>
        <View style={styles.container}>
          {this.props.titleBottom
          && this.props.titleBottom.length > 0 ?
            this.props.titleBottom.map((item, index) =>
              this.renderBottomItem(item, index)
            ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:16,
    flexDirection: 'row',
  },
  textContainerTop:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textContainerBottom: {
    height: 48,
    flex: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'column',
    alignItems: 'center'
  },
  line: {
    width: 90,
    height: 2,
    position: 'absolute',
    top: 46,
    backgroundColor: '#484D5D',
  },
  textNormalBlack: {
    marginTop: 18,
    fontSize: 14,
    color: '#666666'
  },
  textChosenBlack: {
    marginTop: 18,
    fontSize: 14,
    color: '#484D5D',
    fontWeight: 'bold'
  },
  textNormalWhite: {
    marginTop: 18,
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.6
  },
  textChosenWhite: {
    marginTop: 18,
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold'
  }

});