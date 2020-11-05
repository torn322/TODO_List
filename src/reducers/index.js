import { combineReducers } from 'redux'
import { userReducer } from './user'
import { todoListsReducer } from './todoLists'
import { todoReducer } from './todo'


  
  export const rootReducer = combineReducers({
      user: userReducer,
      todoLists: todoListsReducer,
      todo: todoReducer
  }) 