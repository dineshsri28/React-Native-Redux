import {ADD_TODO, DELETE_TODO} from './actionTypes';

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}
export function deleteTodo(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}
