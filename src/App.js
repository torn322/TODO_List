import React from 'react' 
import {List as TodoLists} from './todo_lists/list.jsx' 
import Sorting from './todo_lists/sorting'
import {Add as AddList} from './todo_lists/add'
import Todo from './todo/todo'
import {Add as AddItem} from './todo/add'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="todo-lists">
          <div className="todo-lists__sorting">
            <Sorting />
          </div>
          <TodoLists/>
          <div className="todo-lists__add">
            <AddList />
          </div>
        </div>
        <div className="todo">
            <Todo />
          <div className="todo__add">
            <AddItem />
          </div>
        </div>
      </div>
    )
  }
}

export default App
