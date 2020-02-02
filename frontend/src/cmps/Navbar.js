import { NavLink, Link } from 'react-router-dom';
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Navbar extends Component {

    state = {
        loginUser: ''
    }
    componentDidMount() {
        if (sessionStorage.user) {
            const loginUser = JSON.parse(sessionStorage.user)

            this.setState({ loginUser })

        }

    }
    componentDidUpdate() {

        const loginUser = this.props.user
        this.loadUserLogin(loginUser)



    }
    loadUserLogin = (loginUser) => {
        if (sessionStorage.user) {
            const loginUser = JSON.parse(sessionStorage.user)

            this.setState({ loginUser })

        }

    }

    render() {
        
        return <div className="main-navbar" style={this.props.styleNavBar}>
            <Link to="/" > <div className="flex logo">
                {/* <img src="https://i.ibb.co/8BxPMdT/logo.png" alt="logo"></img> */}
                <div className="logo-text">GuideUp</div>
            </div></Link>
            <div>
            </div>
            <div className=" nav-links">
                <div className="nav-link"><NavLink activeClassName="active" to='/' exact>Home</NavLink></div>
                <div className="nav-link"><NavLink activeClassName="active" to='/login' exact>Login</NavLink></div>
                <div className="nav-link"><NavLink activeClassName="active" to='/join_us' exact>Become a Guide</NavLink></div>
                <div className="nav-link"><NavLink activeClassName="active" to='/profile' exact>Profile
                    {this.state.loginUser &&
                        <Image size={'mini'} src={this.state.loginUser.imgUrl} circular    ></Image>
                    }
                </NavLink></div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        guides: state.guides,
        user: state.guides.loggedInUser
    }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)


