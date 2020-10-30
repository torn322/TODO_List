import React from 'react'

class Item extends React.Component {
    render() {
        return (
            <li className="todo__item">
                <label className="todo__is-done custom-checkbox">
                    <input type="checkbox" name="done"/>
                    <span></span>
                </label>
                <span className="todo__text">Make some stuff</span>
                <span className="todo__date">12.10.2020</span>
                <button className="todo__close btn-close">&#215;</button>
            </li>
        )
    }
}

export default Item