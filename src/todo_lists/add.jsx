import React from 'react'
import { connect } from 'react-redux'
import {addList} from '../actions/todoLists'

class AddList extends React.Component {
    listName = React.createRef()

    submit = (e) => {
        e.preventDefault()
        this.props.addListAction(this.listName.current.value)
        this.listName.current.value = ''
    }

    render () {
        return (
            <form onSubmit={this.submit}>
                <input required type="text" name="listName" ref={this.listName}/>
                <button type="submit" className="btn">Add</button>
            </form>
        )
    } 
}


const mapStateToProps = store => {
    return {
      user: store.user,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      addListAction: (name) => dispatch(addList(name))
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(AddList)

// export { Add } 