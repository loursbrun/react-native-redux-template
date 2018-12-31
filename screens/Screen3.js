import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Screen3 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
          <Text> Screen1 </Text>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
