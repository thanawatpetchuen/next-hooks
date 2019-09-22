
export const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  UPDATE_NAME: 'UPDATE_NAME',
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREASE:
      return {...state, count: state.count + 1 };
    case actions.DECREASE:
      return {...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const nameReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_NAME:
      return { ...state, name: action.payload }
    default:
      throw new Error();
  }
}

export const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return { ...state, todo: [...state.todo, { todo: action.payload, id: state.count+1 }], count: state.count+1 }
    case actions.REMOVE_TODO:
      return { ...state, todo: state.todo.filter(todo => todo.id != action.payload) }
  }
}

export default counterReducer;
