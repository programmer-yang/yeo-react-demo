import React, { Component } from "react";
import { List, Input } from "antd";
import cn from "classnames";
import styles from "./Todo.less";

const { Item } = List;

class Todo extends Component {
  state = {
    text: "",
  };

  localOnEnter = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    dispatch({ type: "demo/addTodo", payload: text });
    this.setState({ text: "" });
  };

  activeTodo = id => {
    const { dispatch } = this.props;
    dispatch({ type: "demo/activeTodo", payload: id });
  };

  render() {
    const { text } = this.state;
    const { todoList, style } = this.props;
    return (
      <div className={styles.root} style={style}>
        <div className={styles.input}>
          <Input
            value={text}
            onPressEnter={this.localOnEnter}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </div>
        <div className={styles.list}>
          <List bordered>
            {todoList.map(item => (
              <Item
                key={item.id}
                className={cn({ [styles.active]: item.complete })}
                onClick={this.activeTodo.bind(this, item.id)}
              >
                {item.text}
              </Item>
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default Todo;
