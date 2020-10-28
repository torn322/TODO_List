import React from 'react'

class Add extends React.Component {
    render () {
        return (
            <form action="/">
                <input type="text" name="listName"/>
                <button type="submit" className="btn">Add</button>
            </form>
        )
    }
}

export { Add } 