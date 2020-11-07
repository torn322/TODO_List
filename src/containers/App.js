import React from 'react' 
import { connect } from 'react-redux'
import TodoLists from '../todo_lists/list.jsx' 
import Sorting from '../todo_lists/sorting'
import AddList from '../todo_lists/add'
import Todo from '../todo/todo'
import AddTodo from '../todo/add'
import Login from '../login/Login'
import Logout from '../login/logout'
import { login, signUp } from '../actions/login'

class App extends React.Component {
  render() {
    const { loginAction, signUpAction } = this.props
    if (localStorage.getItem('user') != 'null')
      return (
        <div className="wrapper">
          <div className="todo-lists">
            <div className="todo-lists__sorting settings-bar">
              <Logout />
              <Sorting />
            </div>
            <TodoLists />
            <div className="todo-lists__add settings-bar">
              <AddList />
            </div>
          </div>
          {this.props.todo.currentList ? 
            <div className="todo">
              <Todo /> 
              <div className="todo__add settings-bar">
                <AddTodo />
              </div> 
            </div> : ''}
        </div>
      )
    else
      return (
        <div className="wrapper">
          <Login login={loginAction} signUpAction={signUpAction} err={this.props.user.err}/>
        </div>
      )
  }
}


const mapStateToProps = store => {
  return {
    user: store.user,
    todo: store.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (userName, pass) => dispatch(login(userName, pass)),
    signUpAction: (userName, pass) => dispatch(signUp(userName, pass))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)


// export default App
