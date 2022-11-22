const initialState = { counter: 0 };

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};
