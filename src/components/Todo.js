import React, { Component } from "react";
import Todoitem from "./Todoitem";

export class Todo extends Component {
  render() {
    return this.props.todos.map(todo => (
      <Todoitem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        markDelete={this.props.markDelete}
      />
    ));
  }
}

export default Todo;
