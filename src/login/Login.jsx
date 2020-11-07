import React from 'react'



class Login extends React.Component {
    login = React.createRef()
    pass = React.createRef()

    signIn = (e) => {
        e.preventDefault()
        this.props.login(this.login.current.value, this.pass.current.value)
    }

    signUp = (e) => {
        e.preventDefault()
        this.props.signUpAction(this.login.current.value, this.pass.current.value)
    }

    render() {
        const {err} = this.props
        return (
            <form className="login" method="POST" onSubmit={this.signIn}>
                <h2>Sign in</h2>
                <p className="err">{err}</p>
                <input required type="text" name="login" placeholder="Login" ref={this.login}/>
                <input required type="password" name="pass" placeholder="Password" ref={this.pass}/>
                <button type="submit" className="btn">Sign in</button>
                <a href="#" onClick={this.signUp} className="signup">Sign up</a>
            </form>
        )
    }
}


  


export default Login