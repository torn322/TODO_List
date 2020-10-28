import React from 'react' 

class Add extends React.Component {
    render () {
        return (
            <form action="/">
                <input type="text" name="listName"/>
                <input type="checkbox" name="isUrgently" id=""/>
                <label htmlFor="isUrgently">Urgently</label>
                <button type="submit" className="btn">Add</button>
            </form>
        )
    }
}

export {Add}