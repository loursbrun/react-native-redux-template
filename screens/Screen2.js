import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../redux/actions/todo';


class Screen2 extends React.Component {
  static navigationOptions = {
    header: null,
  };

  addTodo() {
    this.props.onAddTodo(this.props.todo);
  }

  removeTodo(index) {
    this.props.onRemoveTodo(this.props.todo,index);
  }

  render() {
    return (
      <View style={styles.container}>
          
        <FlatList
          data={this.props.todo}
          renderItem={(todo) => 
            <View>
              <TouchableOpacity onPress={() => this.removeTodo(todo.index) } >
                  <Text style={{ margin: 20 }} >{this.props.todo[todo.index].text}</Text>
              </TouchableOpacity>
            </View>
          }
        />

        <Button onPress={() => this.addTodo()} title="ADD"></Button>
      
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


const mapStateToProps = (state, ownProps) => {
  return {
    list: state.math.list,
    todo: state.todo.todo
  };
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => { dispatch(addTodo(todo)); },
    onRemoveTodo: (todo,index) => { dispatch(removeTodo(todo,index)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
