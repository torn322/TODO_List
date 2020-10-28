import React from 'react'

class Todo extends React.Component {
    render () {
        return (
            <div>
                <h2>Random List Name</h2>
                <ul className="todo__list">
                    <li className="todo__item">
                        <input className="todo__is-done" type="checkbox" name="done"/>
                        <span className="todo__text">Make some stuff</span>
                        <span className="todo__date">12.10.2020</span>
                    </li>
                    <li className="todo__item">
                        <input className="todo__is-done" type="checkbox" name="done"/>
                        <span className="todo__text">Make some stuff</span>
                        <span className="todo__date">12.10.2020</span>
                    </li>
                    <li className="todo__item">
                        <input className="todo__is-done" type="checkbox" name="done"/>
                        <span className="todo__text">Make some stuff</span>
                        <span className="todo__date">12.10.2020</span>
                    </li>
                </ul>
            </div>
        ) 
    }
}

export default Todo