import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../Actions/Types';

const initialState = {
    todosData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todosData: [...state.todosData, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todosData: [...state.todosData.filter(x => x.id !== action.payload.id)]
            }
        case EDIT_TODO:

            return {
                ...state,
                todosData: [...state.todosData.map(x => x.id === action.payload.id ? action.payload : x)]
            }
        default:
            return state;
    }
}