import React, { Component } from "react";
import Todo from "./components/Todo";
import uuid from "uuid";
import Header from "./components/layout/Header";
import Addtodo from "./components/Addtodo";

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take the trash out",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Meet the boss",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Take wife for dinner",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Play football",
        completed: false
      }
    ]
  };
  markDelete = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  addTodo = title => {
    const newTodo = { id: uuid.v4(), title, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Addtodo addTodo={this.addTodo} />
        <Todo
          todos={this.state.todos}
          markDelete={this.markDelete}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
