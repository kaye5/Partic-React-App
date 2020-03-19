import React from 'react';
import {
    Profile,Ticket
} from './';
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
function UserRoute(){
    return(
        <Switch>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route path="/profile/ticket">
                <Ticket />
            </Route>
        </Switch>
    )
}

export default withRouter(UserRoute);