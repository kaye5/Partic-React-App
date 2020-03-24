import React from 'react';
import UserRoute from './UserRoute';
export default  class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container-fluid">
                <UserRoute />
            </div>
        )
    }
}