import React from 'react';
import {
    Profile,Ticket
} from './';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    withRouter,
} from "react-router-dom";
function UserRoute(){
    return(
        <Switch>
            <Router>
                <Profile />
            </Router>
            <Route exact path="/profile/ticket">
                <Ticket />
            </Route>
        </Switch>
    )
}

export default withRouter(UserRoute);