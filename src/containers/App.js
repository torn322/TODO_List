import React from 'react' 
import { connect } from 'react-redux'
import TodoLists from '../todo_lists/list.jsx' 
import Sorting from '../todo_lists/sorting'
import AddList from '../todo_lists/add'
import Todo from '../todo/todo'
import {Add as AddItem} from '../todo/add'
import Login from '../login/Login'
import { login } from '../actions/login'

class App extends React.Component {
  render() {
    const { loginAction } = this.props
    if (localStorage.getItem('user'))
      return (
        <div className="wrapper">
          <div className="todo-lists">
            <div className="todo-lists__sorting settings-bar">
              <Sorting />
            </div>
            <TodoLists />
            <div className="todo-lists__add settings-bar">
              <AddList />
            </div>
          </div>
          <div className="todo">
              <Todo />
            <div className="todo__add settings-bar">
              <AddItem />
            </div>
          </div>
        </div>
      )
    else
      return (
        <div className="wrapper">
          <Login login={loginAction}/>
        </div>
      )
  }
}


const mapStateToProps = store => {
  // console.log(store) 
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (userName, pass) => dispatch(login(userName, pass))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)


// export default App
