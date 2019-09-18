import React, { createContext, useState } from 'react';
import { uid } from 'react-uid';

const MyContext = createContext({
  name: "Thanawat",
});

export const initTodos = [
  {
    todo: "create todo context"
  }, {
    todo: "create todo uid"
  }
]

export const TodoContext = createContext()

export const TodoProvider = props => {
  return <TodoContext.Provider {...props}>{props.children}</TodoContext.Provider>
}

export const TodoConsumer = props => {
  return <TodoContext.Consumer {...props}>{props.children}</TodoContext.Consumer>
}

export default MyContext