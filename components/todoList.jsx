import React, { useState, useReducer } from 'react';
import MyContext, { TodoProvider, TodoConsumer, initTodos } from './context';
import UpperCasedTitle from './upperCasedTitle';
import counterReducer, { actions, nameReducer, todoReducer } from './reducer';

const TodoList = () => {
  const handleClick = (e, index, dispatch) => {
    e.preventDefault();
    dispatch({ type: actions.REMOVE_TODO, payload: index });
  }

  const render = (todos, dispatch) => (
    <ul>
      {(() => todos.map((todo, index) => 
        <li key={index} style={{ margin: '.5rem 0' }}>
          {todo.todo}
          <button style={{ margin: '0 .5rem' }} onClick={e => handleClick(e, index, dispatch)}>Remove</button>
        </li>
      ))()}
    </ul>
  )
  return (
    <TodoConsumer>
        {({ todoState, todoDispatch }) => render(todoState, todoDispatch)}
    </TodoConsumer>
  )
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [nameState, nameDispatch] = useReducer(nameReducer, { name: "Tony" });
  const [todoState, todoDispatch] = useReducer(todoReducer, [ ...initTodos, { todo: 'test' }]);

  const handleIncrease = () => {
    dispatch({ type: actions.INCREASE });
  }

  const handleDecrease = () => {
    dispatch({ type: actions.DECREASE });
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    const whatToDo = prompt('What to do?');
    todoDispatch({ type: actions.ADD_TODO, payload: whatToDo })
  }

  return (
    <TodoProvider value={{ todoState, todoDispatch }}>
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
          <button onClick={handleButtonClick}>Add Todo</button>
        </section>
      </MyContext.Provider>
    </TodoProvider>
  );
}

const Title = () => {
  return (
    <MyContext.Consumer>
      {({ nameState, nameDispatch }) => (
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