import React from 'react'
import Item from './item'

class List extends React.Component {
    render () {
        return (
            <ul className="todo-lists__list">
                <Item />
                <Item />
                <Item />
            </ul>
        )
    }
}

export { List }