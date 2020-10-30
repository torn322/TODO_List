import React from 'react'

class Item extends React.Component {
    render () {
        return (
            <li className="todo-lists__item">
                <h3>Random list name</h3> 
                <button className="todo-lists__close btn-close">&#215;</button>
            </li>
        )
    }
}

export default Item