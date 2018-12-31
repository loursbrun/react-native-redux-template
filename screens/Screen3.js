import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

// Redux import
import { connect } from 'react-redux';
import {
  testAction,
} from './redux';
import { Provider } from 'react-redux';
import { store } from './redux';


class AppInner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Screen3 </Text>
        <Button title="Test" onPress={this.props.testAction}></Button>
          <Text> {this.props.content}</Text>
      </View>
    );
  }
}


// Redux Provider
export default class Screen3 extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
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


// Redux Actions & Connect
const mapStateToProps = (state) => ({
  content: state.dvas0004.content || "Please Wait...",
});

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => {
      dispatch(testAction())
    }
  }
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppInner);

