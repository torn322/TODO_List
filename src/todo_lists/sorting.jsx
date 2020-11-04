import React from 'react'
import { connect } from 'react-redux'
import { sort } from '../actions/todoLists'

class Sorting extends React.Component {
    sortMethodRef = React.createRef()

    change = () => {
        this.props.sortAction(this.sortMethodRef.current.value)
    }

    render () {
        return (
            <form action="">
                <select ref={this.sortMethodRef} name="sorting" id="sorting" onChange={this.change}>
                    <option value="0">Unfinished</option>
                    <option value="1">Finished</option>
                    <option value="2">All</option>
                </select>
            </form>
        )
    }
}


const mapStateToProps = store => {
    // console.log(store) 
    return {
      todoLists: store.todoLists
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      sortAction: (sortMethod) => dispatch(sort(sortMethod))
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Sorting)



// export default Sorting 