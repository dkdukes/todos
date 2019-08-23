import React, { Component } from "react";

export class Todoitem extends Component {
  getStyles = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };
  btnStyle = () => {
    return {
      background: "red",
      color: "white",
      borderRadius: "50%",
      padding: "10px",
      float: "right",
      cursor: "pointer"
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyles()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {""}
          {title}
          <buton
            onClick={this.props.markDelete.bind(this, id)}
            style={this.btnStyle()}
          >
            X
          </buton>
        </p>
      </div>
    );
  }
}

export default Todoitem;
