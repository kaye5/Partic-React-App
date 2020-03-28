import React from 'react';
import Auth from '../Modules/Auth';
import { Link } from 'react-router-dom';
export default class NavBar extends React.Component {
    state = {
        login : false,
        profileClass : '',
    }
    componentDidMount(){
        if(Auth.isUserAuthenticated()){
            this.setState({login : true})
        } else 
        this.setState({login : false})
    }
    handleOpenProfile(){
        if(this.state.profileClass === 'show')
            this.setState({profileClass : ''})
        else 
            this.setState({profileClass : 'show'})
    }
    isLinkActive(path){
        if(window.location.pathname === path)
            return "nav-item active"
        else 
            return "new-item"
    }
    renderIsLogin(){
        if(!this.state.login)
        return (
            <React.Fragment>
                <Link to={{
                    pathname : '/login',
                    state : {
                        prev : window.location.pathname,
                    }}
                }><span className="dropdown-item">Login</span></Link>
                <Link to={{
                    pathname : '/signup',
                    state : {
                        prev : window.location.pathname
                    }}
                }><span className="dropdown-item">Sign up</span></Link>
            </React.Fragment>
        )
        else 
        return(
            <React.Fragment>
                <a className="dropdown-item" href="/profile/setting">Account Setting</a>
                <a className="dropdown-item" href="/profile/ticket">Ticket</a>
                <a className="dropdown-item" href="/profile/event/ticket">Create Event</a>
                <a className="dropdown-item" href="/events/my">My Events </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/logout" style={{color : "red"}}>Logout</a>
            </React.Fragment>
        )
    }
    render(){
        return(
            <header className="shadow p-2 mb-3 bg-white rounded">                
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">Partic.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className={this.isLinkActive('/home')}>
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={this.isLinkActive('/contact-us')}>
                            <a className="nav-link" href="/contact-us">Contact us</a>
                        </li>
                        <li className={this.isLinkActive('/events')}>
                            <a className="nav-link" href="/events">Discover Event</a>
                        </li>
                        <li className={this.isLinkActive('/events/create')}>
                            <a className="nav-link" href="/events/create"><button className="post-btn">Post Event</button></a>
                        </li>
                        <li className="nav-item dropdown dropleft" onClick={()=>this.handleOpenProfile()}>
                            <span className="nav-link dropdown-toggle">
                            <i className="fa fa-user-circle" style={{color : "black",fontSize:"1.5rem"}}></i>
                            </span>
                            <div className={"dropdown-menu "+this.state.profileClass} aria-labelledby="navbarDropdown" >
                                {this.renderIsLogin()}
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}