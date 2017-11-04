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
      indexChosen: 0
    };
  }

  renderItem = (title, index) => {
    console.log(title, index);
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({indexChosen: index});
        }}>
        <View style={styles.textContainer}>
          <Text style={index == this.state.indexChosen ?
            styles.textChosen : styles.textNormal}>
            {title}
          </Text>
          {index == this.state.indexChosen ?
            <View style={styles.line}/> : null}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    console.log(this.props.title);
    return (
      <View style={styles.container}>
        {this.props.title
        && this.props.title.length > 0 ?
          this.props.title.map((item, index) =>
            this.renderItem(item, index)
          ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  textContainer: {
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
  textNormal: {
    marginTop: 18,
    fontSize: 14,
    color: '#666666'
  },
  textChosen: {
    marginTop: 18,
    fontSize: 14,
    color: '#484D5D',
    fontWeight: 'bold'
  }

});