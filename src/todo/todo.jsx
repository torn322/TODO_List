import React from 'react'
import Item from './item'


class Todo extends React.Component {
    render () {
        return (
            <div>
                <h2>Random List Name</h2>
                <ul className="todo__list">
                    <Item />
                    <Item />
                    <Item />
                    
                </ul>
            </div>
        ) 
    }
}

export default Todo