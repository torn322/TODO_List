const initialState = {
    userId: null,
  }

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(70)
            return {...state, userId: action.payload}
        
        case LOGIN_ERROR:
            return {...state, userId: action.payload}
    
        default:
            return state
            break;
    }
  }