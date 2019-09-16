import React, { useState, useReducer, useContext } from 'react';
import MyContext, { TodoProvider, TodoContext, TodoConsumer } from './context';
import UpperCasedTitle from './upperCasedTitle';
import counterReducer, { actions } from './reducer';


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
  const [user, setUser] = useState({
    name: "Tony",
  });

  const handleIncrease = () => {
    dispatch({ type: actions.INCREASE });
  }

  const handleDecrease = () => {
    dispatch({ type: actions.DECREASE });
  }

  return (
    <TodoProvider>
      <MyContext.Provider value={{user, setUser, state}}>
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
          {/* <todoContext.Consumer>
            <ul>
              <li>sad</li>
              {(context) => context.map(todo => <li>{todo.todo}</li>)}
            </ul>
          </todoContext.Consumer> */}
        </section>
      </MyContext.Provider>
    </TodoProvider>
  );
}

const Title = () => {
  const [title, setTitle] = useState(null)
  const { user, setUser } = useContext(MyContext)
  const handleSubmit = (e, fn) => {
    e.preventDefault();
    fn({ name: title});
  }

  return (
    <MyContext.Consumer>
      {() => (
        <>
          <h1>{user.name}</h1>
          <UpperCasedTitle />
          <form onSubmit={e => handleSubmit(e, setUser)}>
            <input type="text" name="name" onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">Change my name</button>
          </form>
        </>
      )}
    </MyContext.Consumer>
  )
}



export default Counter;