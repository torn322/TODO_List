import { combineReducers } from 'redux'
import { userReducer } from './user'
import { todoListsReducer } from './todoLists'


  
  export const rootReducer = combineReducers({
      user: userReducer,
      todoLists: todoListsReducer
  }) 