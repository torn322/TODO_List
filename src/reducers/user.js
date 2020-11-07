const initialState = {
    userId: localStorage.getItem('user') || null,
  }

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGOUT = 'LOGOUT'
const SIGNUP_ERROR = 'SIGNUP_ERROR'

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, userId: action.payload}
        
        case LOGIN_ERROR:
            return {...state, err: action.payload}

        case LOGOUT:
            return {...state, userId: action.payload}

        case SIGNUP_ERROR:
            return {...state, err: action.payload}

        default:
            return state
            break;
    }
  }