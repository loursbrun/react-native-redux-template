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
import { addTodo, removeTodo, toggleTodo } from '../redux/actions/todo';


class Screen2 extends React.Component {
  static navigationOptions = {
    header: null,
  };



  addTodo() {
    this.props.onAddTodo(this.props.todo);
  }

  removeTodo(index) {
    this.props.onRemoveTodo(this.props.todo, index);
  }

  toggleTodo(index) {
    this.props.onToggleTodo(this.props.todo, index);
  }

  render() {
   
    return (
      <View style={styles.container}>

        <FlatList
          data={this.props.todo}
          renderItem={(todo) =>
            <View
              style={
                this.props.todo[todo.index].selected ? [styles.todo_container, styles.selected] : styles.todo_container
              }
            >
              <TouchableOpacity onPress={() => this.toggleTodo(todo.index)} style={styles.todo_title} >
                <Text style={{}} >{this.props.todo[todo.index].text}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.removeTodo(todo.index)} style={styles.delete_button}>
                <Text style={{ textAlign: "center", margin: 10, color: "white" }} >Delete</Text>
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
    backgroundColor: '#eaeaeaea',
    marginTop: 50
  },
  todo_container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5
  },
  selected: {
    backgroundColor: 'green',
  },
  todo_title: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 10
  },
  delete_button: {
    flex: 1,
    backgroundColor: '#ed5e68',
    borderRadius: 5,
    alignSelf: 'flex-end',
    margin: 8
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
    onRemoveTodo: (todo, index) => { dispatch(removeTodo(todo, index)); },
    onToggleTodo: (todo, index) => { dispatch(toggleTodo(todo, index)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
