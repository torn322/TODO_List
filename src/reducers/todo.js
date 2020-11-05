const initialState = {
    todos: [],
    currentList: null
  }

  
const SHOW_TODOS = 'SHOW_TODOS'
const DELETE_TODO = 'DELETE_TODO'
const ADD_TODO = 'ADD_TODO'
const SET_DONE = 'SET_DONE'


export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_TODOS:
            console.log(action.payload)
            return {...state,
                todos: action.payload.todos,
                currentList: action.payload.currentList
            }

        // case DELETE_TODO: 
        //     return {...state,  todos: action.payload}

        // case ADD_TODO:
        //     return {...state,  todos: action.payload}

        // case SET_DONE:
        //     return {...state,  todos: action.payload}
    
        default:
            return state
            break;
    }
  }