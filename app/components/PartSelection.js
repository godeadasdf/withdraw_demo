import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import CheckText from './CheckText';

export default class PartSelection extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.partname.map((item) => {
          return <CheckText
            onPress={(id, state) => {
              console.log(id, state);
            }}
            id={item.id}
            partname={item.partname}
          />;
        })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignContent:'flex-start'
  }
});

