import React, { useState, useReducer, useContext } from 'react';
import MyContext, { TodoProvider, TodoContext, TodoConsumer } from './context';
import UpperCasedTitle from './upperCasedTitle';
import counterReducer, { actions, nameReducer } from './reducer';


const initState = [{
  name: 'a',
  value: 2,
}]

const TodoList = () => {
  // const todos = useContext(TodoContext);
  // console.log(todos.todos)
  const render = (todos) => (
    <ul>
      {(() => todos.map(todo => <li>{todo.todo}</li>))()}
    </ul>
  )
  return (
    // <TodoConsumer>
    <TodoContext.Consumer>
        {(context) => render(context.todos)}
    </TodoContext.Consumer>
    // </TodoConsumer>
  )
}


const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [nameState, nameDispatch] = useReducer(nameReducer, { name: "Tony" });

  const handleIncrease = () => {
    dispatch({ type: actions.INCREASE });
  }

  const handleDecrease = () => {
    dispatch({ type: actions.DECREASE });
  }

  return (
    <TodoProvider>
      <MyContext.Provider value={{nameState, state, nameDispatch}}>
        <div>
          <Title />
          <h1>Counter with Reducer</h1>
          <p>Count: {state.count}</p>

          <div>
            <button type="button" onClick={handleIncrease}>+</button>
            <button type="button" onClick={handleDecrease}>-</button>
          </div>
        </div>
        <section>
          <h1>My todos</h1>
          <TodoList />
        </section>
      </MyContext.Provider>
    </TodoProvider>
  );
}

const Title = () => {
  const { nameState, nameDispatch } = useContext(MyContext);
  return (
    <MyContext.Consumer>
      {() => (
        <>
          <h1>{nameState.name}</h1>
          <UpperCasedTitle />
          <Form onSubmit={nameDispatch} type={actions.UPDATE_NAME}/>
        </>
      )}
    </MyContext.Consumer>
  )
}

const Form = ({onSubmit, type}) => {
  const [name, setName] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, payload: name })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={e => setName(e.target.value)} />
      <button type="submit">Change my name</button>
    </form>
  )
}



export default Counter;