import { combineReducers } from 'redux';
import todoReducer from './TodoReducers';

export default combineReducers({
    todos: todoReducer
})