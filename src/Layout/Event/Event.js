import React from 'react';
import EventRoute from './EventRoute';
export default  class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container">
                <EventRoute />
            </div>
        )
    }
}