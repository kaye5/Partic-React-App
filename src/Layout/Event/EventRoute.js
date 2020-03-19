import React from 'react';
import {
    Detail,Events,Payment
} from './';
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
function UserRoute(){
    return(
        <Switch>
            <Route exact path="/events">
                <Events />
            </Route>
            <Route exact path="/events/:id" component={(props)=>(<Detail {...props}/>)}/>
            <Route exact path="/events/:id/payment" component={(props)=>(<Payment {...props}/>)}/>
        </Switch>
    )
}

export default withRouter(UserRoute);