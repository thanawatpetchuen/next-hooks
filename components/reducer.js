
export const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  UPDATE_NAME: 'UPDATE_NAME',
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREASE:
      return {...state, count: state.count + 1 };
    case actions.INCREASE:
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

export default counterReducer;
