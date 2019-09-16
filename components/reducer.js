
export const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
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

export default counterReducer;
