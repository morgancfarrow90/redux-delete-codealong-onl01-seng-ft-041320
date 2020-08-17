import React from 'react'

const Todo = props =>
  <div>
  <li>{props.todo.text}</li>
  <button onClick={() => props.delete(props.todo.id)}>Delete</button>
  </div>


export default Todo;
