import React, { createContext, useState } from 'react';

const MyContext = createContext({
  name: "Thanawat",
});

export const initTodos = [
  {
    id: 1,
    todo: "create todo context"
  }, {
    id: 2,
    todo: "create todo uid"
  }, { 
    id: 3,
    todo: 'test' 
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