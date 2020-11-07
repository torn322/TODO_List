import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../actions/login'


class Logout extends React.Component {
    render() {
        const { logoutAction } = this.props
        return (
            <a className="logout" href="#" onClick={logoutAction}>Sign out</a>
        )
    }
}


const mapStateToProps = store => { 
    return {
      user: store.user,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      logoutAction: () => dispatch(logout())
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Logout)