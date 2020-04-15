import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './Types';

export const createData = todoData => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: todoData
    })
}

export const deleteUser = deleteData => dispatch => {
    dispatch({
        type: DELETE_TODO,
        payload: deleteData
    })
}

export const editUser = editData => dispatch => {
    dispatch({
        type: EDIT_TODO,
        payload: editData
    })
}