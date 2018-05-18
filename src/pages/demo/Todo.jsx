import React, { Component } from 'react';
import { List, Input } from 'antd';
import cn from 'classnames';
import styles from './Todo.less';

const Item = List.Item;

class Todo extends Component {
  state = {
    text: ''
  };
  localOnEnter = e => {
    this.props.addTodo(e.target.value);
    this.setState({ text: '' });
  };
  render() {
    const { todoList, style, activeTodo } = this.props;
    return (
      <div className={styles.root} style={style}>
        <div className={styles.input}>
          <Input
            value={this.state.text}
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
                onClick={activeTodo.bind(this, item.id)}
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
