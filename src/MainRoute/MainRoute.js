import React from 'react';
import User from '../Layout/User/User';
import Home from '../Layout/Home/Home';
import Login from '../Layout/Login/Login';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    withRouter,
    Redirect,
} from "react-router-dom";
function MainRoute(){
    return(
        <Switch>
            <Route exact path="/" component={()=><Redirect to="/home"/>}/>
            <Route path="/login" component={(props)=><Login {...props}/>} />
            <Route exact path="/home">
                <Home />
            </Route>
            <Router>
                <User />
            </Router>
            <Router></Router>
        </Switch>
    )
}

export default withRouter(MainRoute);