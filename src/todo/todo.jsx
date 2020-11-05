import React from 'react'
import Item from './item'
import { connect } from 'react-redux'
import { setDone, deleteTodo } from '../actions/todo'



class Todo extends React.Component {
    render () {
        const { todos, currentList } = this.props.todo
        return (
            <div>
                <h2>{currentList.name}</h2>
                <ul className="todo__list">
                    { 
                        todos.map(item => <Item 
                            item={ item } 
                            key={ item.id } 
                            setDone={this.props.setDoneAction}
                            deleteTodo={this.props.deleteTodoAction}
                            parrentList={currentList}
                            />)
                    }                    
                </ul>
            </div>
        ) 
    }
}


const mapStateToProps = store => {
    return {
      todo: store.todo
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      setDoneAction: todo => dispatch(setDone(todo)),
      deleteTodoAction: todo => dispatch(deleteTodo(todo))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Todo)

// export default Todo