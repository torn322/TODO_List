import React from 'react'
import Item from './item'
import { connect } from 'react-redux'
import { show, deleteList } from '../actions/todoLists'
import { show as showTodos } from '../actions/todo'

class todoLists extends React.Component {

    componentWillMount() {
        this.props.showAction(localStorage.getItem('user'))
    }

    render () {
        const { lists, sortMethod } = this.props.todoLists
        return (
            <ul className="todo-lists__list">
                { lists.map((item, i) => {
                    if (sortMethod == 0 && item.isDone) {
                        return ''
                    } else if (sortMethod == 1 && !item.isDone) {
                        return ''
                    } else {
                        return <Item 
                            item={ item } 
                            key={ item.id } 
                            deleteList={this.props.deleteListAction}
                            showTodos={this.props.showTodosAction}
                        /> 
                    }
                }
            )}
            </ul>
        )
    }
}

const mapStateToProps = store => {
    console.log(store) 
    return {
      user: store.user,
      todoLists: store.todoLists
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      showAction: (userId) => dispatch(show(userId)),
      deleteListAction: (listId) => dispatch(deleteList(listId)), 
      showTodosAction: (listId) => dispatch(showTodos(listId))
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(todoLists)

// export { List }