import React from 'react' 

class Add extends React.Component {
    render () {
        return (
            <form action="/">
                <input type="text" name="listName"/>
                <label className="custom-checkbox">
                    <input type="checkbox" name="is-urgently"/>
                    <span></span>
                    <label htmlFor="is-urgently">Urgently</label>
                </label>
                <button type="submit" className="btn">Add</button>
            </form>
        )
    }
}

export {Add}