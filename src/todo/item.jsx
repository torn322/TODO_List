import React from 'react'

class Item extends React.Component {

    checkRef = React.createRef()

    checkHandler = () => {
        if (window.confirm('Are you sure you want to finish this case?')) {
            let item = this.props.item
            item.parrentList = this.props.parrentList

            this.props.setDone(item)
        }
    }

    deleteHandler = () => {
        if (window.confirm('Are you sure you want to delete this case?')) {
            let item = this.props.item
            item.parrentList = this.props.parrentList

            this.props.deleteTodo(item)
        }
    }

    getDate = () => {
        const date = this.props.item.date.toDate()
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
    }

    render() {
        const { item } = this.props
        return (
            <li className={`todo__item ${item.isUrgently ? 'todo__item_urgently' : ''} ${item.isDone ? 'todo__item_done' : ''}`}>
                <label className="todo__is-done custom-checkbox">
                    <input ref={this.checkRef} onChange={this.checkHandler} type="checkbox" defaultChecked={item.isDone} disabled={item.isDone} />
                    <span></span>
                </label>
                <span className="todo__text">{ item.name }</span>
                <span className="todo__date">{ this.getDate() }</span>
                <button className="todo__close btn-close" onClick={this.deleteHandler}>&#215;</button>
            </li>
        )
    }
}

export default Item