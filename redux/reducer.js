import {ADD_TODO, DELETE_TODO} from './actionTypes';

const initalState = {
  todos: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case DELETE_TODO:
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.filter((item) => item.title !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
