import React from 'react';
import {eventData}from '../../dataTest/event.js'
export default  class Events extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            events : eventData
        }
    }
    render(){
        return(
            <React.Fragment>
                Events
            </React.Fragment>
        )
    }
}