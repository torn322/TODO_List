import React from 'react'



class Login extends React.Component {
    login = React.createRef()
    pass = React.createRef()

    submit = (e) => {
        e.preventDefault()
        console.log(this.login.current.value)

        this.props.login(this.login.current.value, this.pass.current.value)

        
    }
    render() {
        return (
            <form className="login" method="POST" onSubmit={this.submit}>
                <h2>Sign in</h2>
                <input type="text" name="login" placeholder="Login" ref={this.login}/>
                <input type="password" name="pass" placeholder="Password" ref={this.pass}/>
                <button type="submit" className="btn">Sign in</button>
            </form>
        )
    }
}


  


export default Login