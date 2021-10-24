import React from 'react';
import './todo-list.css'

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;
    return (
      <li key={ id } className="list-group-item">
        <TodoListItem { ...itemProps } />
      </li>
      /* </li>
        <TodoListItem
          label={ item.label }
          important={ item.important } />
      </li> */
    );
  });

  return(
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
}

export default TodoList;