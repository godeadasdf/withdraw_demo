import React, { Component } from 'react';
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
  
  renderText = (smallText) => {
    if (smallText == -1) {
      return (<Text style={styles.text}>
        {this.props.name}
      </Text>);
    } else {
      return (
        <View style={{flexDirection:'row'}}>
          <Text style={styles.text}>
            {this.props.name.slice(0, smallText)}
          </Text>
          <Text style={styles.textSmall}>
            {this.props.name.slice(smallText, this.props.name.length)}
          </Text>
        </View>);
    }
  };
  
  render() {
    const colorIndex = this.state.isChecked ? 0 : 1;
    const hasLittleText = this.props.name.indexOf('-');
    return (
      <TouchableHighlight
        style={[ styles.container,
          {backgroundColor: this.colorsBackground[ colorIndex ]} ]}
        onPress={
          async () => {
            await this.setState((prevState) => {
              return {isChecked: !prevState.isChecked};
            });
            this.props.onPress(this.props.id, this.state.isChecked);
          }
        }
        underlayColor={this.colorsTouch[ colorIndex ]}
      >
        <View>
          {this.renderText(hasLittleText)}
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
  },
  textSmall: {
    fontSize: 10,
    textAlign: 'center',
    alignItems: 'flex-start',
    color: '#333333',
    borderRadius: 10,
    marginTop:4
  }
});

