import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';


export default class CheckText extends Component {

  colorsBackground = [
    '#FDE000',//选中
    '#F1F1F1', //未选中
  ];

  colorsTouch = [
    '#ecd100', //选中时点击
    '#e1e1e1', //未选中时点击
  ];

  state = {
    isChecked: false
  };

  componentWillMount() {
    this.setState({isChecked: false});
  }

  render() {
    const colorIndex = this.state.isChecked ? 0 : 1;
    return (
      <TouchableHighlight
        style={[styles.container,
          {backgroundColor: this.colorsBackground[colorIndex]}]}
        onPress={
          () => {
            this.setState((prevState) => {
              return {isChecked: !prevState.isChecked};
            });
            this.props.onPress(this.props.id, this.state.isChecked);
          }
        }
        underlayColor={this.colorsTouch[colorIndex]}
      >
        <View>
          <Text style={styles.text}>
            {this.props.partname}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: 30,
    borderRadius: 77,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'flex-start',
    color: '#333333',
    borderRadius: 10
  }
});

