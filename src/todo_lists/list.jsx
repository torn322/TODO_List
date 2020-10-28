import React from 'react'

class List extends React.Component {
    render () {
        return (
            <ul className="todo-lists__list">
                <li className="todo-lists__item">
                    <h3>Random list name</h3>
                    <button className="todo-lists__close">X</button>
                </li>
                <li className="todo-lists__item">
                    <h3>Random list name</h3>
                    <button className="todo-lists__close">X</button>
                </li>
                <li className="todo-lists__item">
                    <h3>Random list name</h3>
                    <button className="todo-lists__close">X</button>
                </li>
            </ul>
        )
    }
}

export { List }