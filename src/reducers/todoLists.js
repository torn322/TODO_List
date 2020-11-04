const initialState = {
    lists: [],
    sortMethod: 0
  }

const SHOW = 'SHOW'
const DELETE = 'DELETE'
const ADD = 'ADD'
const SORT = 'SORT'


export function todoListsReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW:
            return {...state,  lists: action.payload}

        case DELETE: 
            return {...state,  lists: action.payload}

        case ADD: 
            return {...state,  lists: action.payload}

        case SORT: 
            return {...state,  sortMethod: action.payload}
    
        default:
            return state
            break;
    }
  }