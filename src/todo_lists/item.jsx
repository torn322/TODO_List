import React from 'react'

class Item extends React.Component {
    render () {
        const {item, deleteList} = this.props
        return (
            <li className={`todo-lists__item ${item.isDone ? 'todo-lists__item_done' : ''}`}>
                <h3>{ item.name }</h3> 
                <button className="todo-lists__close btn-close" onClick={() => {deleteList(item.id)}}>&#215;</button>
            </li>
        )
    }
}

export default Item