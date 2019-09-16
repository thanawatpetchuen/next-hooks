import React, { createContext, useState } from 'react';
import { uid } from 'react-uid';

const MyContext = createContext({
  name: "Thanawat",
});

const initTodos = [
  {
    todo: "create todo context"
  }, {
    todo: "create todo uid"
  }
]

export const TodoContext = createContext(initTodos)

export const TodoProvider = props => {
  const [todos, setTodos] = useState(initTodos);
  return <TodoContext.Provider value={{ todos, setTodos }}>{props.children}</TodoContext.Provider>
}

export const TodoConsumer = props => {
  return <TodoContext.Consumer>{props.children}</TodoContext.Consumer>
}

export default MyContext