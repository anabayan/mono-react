import { HELLO_BUTTON_CLICKED } from '../actions';

const initialState = {
  count: 0
};

export const demo = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case HELLO_BUTTON_CLICKED:
      return $({ count: state.count + 1 });
    default:
      return $();
  }
};
