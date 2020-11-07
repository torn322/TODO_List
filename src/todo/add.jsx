import React from 'react' 
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'



class AddTodo extends React.Component {

    nameRef = React.createRef()
    isUrgentlyRef = React.createRef()

    submitHandler = (e) => {
        e.preventDefault()

        this.props.addTodoAction({
            isUrgently: this.isUrgentlyRef.current.checked,
            parrentList: this.props.todo.currentList,
            name: this.nameRef.current.value,
            date: new Date()
        })

        this.nameRef.current.value = ''
        this.isUrgentlyRef.current.checked = false

    }

    render () {
        return (
            <form onSubmit={this.submitHandler}>
                <input required ref={this.nameRef} type="text"/>
                <label className="custom-checkbox">
                    <input ref={this.isUrgentlyRef} type="checkbox" name="is-urgently"/>
                    <span></span>
                    <label htmlFor="is-urgently">Urgently</label>
                </label>
                <button type="submit" className="btn">Add</button>
            </form>
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
      addTodoAction: todo => dispatch(addTodo(todo))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(AddTodo)

// export {Add}