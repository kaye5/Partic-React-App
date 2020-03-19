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
            <Route exact path="/events/:id" component={()=>{<Detail {...props}/>}}/>
            <Route exact path="/events/:id/payment" component={()=>{<Payment {...props}/>}}/>
        </Switch>
    )
}

export default withRouter(UserRoute);