import React from 'react'
import {eventData} from '../../../dataTest/event' 
import { Link } from 'react-router-dom'
export default class Manage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currency : 'IDR',
            event : {

            },
            fav : ''
        }
    }
    componentDidMount(){
        let idx = parseInt(this.props.match.params.id)
        this.setState({event : eventData[idx-1]});
    }
    handleClick(event){
        this.setState({currency : event.target.id});
    }
    handleChange(ev){
        let temp = this.state.event
        temp[ev.target.name] = ev.target.value
        this.setState({
            event : temp
        })
    }
    handleFav(){
        let likeBtn = document.getElementById('fav-btn')
        if(likeBtn.classList.contains('text-danger')){
            likeBtn.classList.remove('text-danger')
        } else {
            likeBtn.classList.add('text-danger')
        }
    }
    render(){
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 col-md-6 mb-5">
                    <div className="row" style={{justifyContent:"center"}}>
                        <div className="create-img">
                        <img src={this.state.event.img} alt="post" height="405px" width="100%" className="img"/>
                        <button className="btn partic-btn partic-yellow-bg create-img-text">Edit picture</button>
                        </div>
                    </div>
                    <div className="row" style={{justifyContent:"center"}}>
                        <div className="cont-search text-center">
                            <button className={"btn detail-act-btn "+this.state.fav} id="fav-btn"  onClick={(e)=>this.handleFav(e)}><i class="fa fa-heart mr-2"></i> 99</button>
                            <button className="btn detail-act-btn">Comments</button>
                        </div>
                    </div>
                    <div className="row mt-5" style={{justifyContent:"center"}}>
                        <Link to="/events/participant/1"><button className="btn partic-btn partic-blue-bg py-2 px-5">Manage Participant</button></Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 font-weight-bold mb-4">
                <form method="POST" action="#">
                    <div className="create-input">
                        <label>Event name</label>
                        <input className="form-control" value={this.state.event.name} onChange={(e)=>this.handleChange(e)} type="text" name="name" required/>
                    </div>
                    <div className="create-input">
                        <label>Description</label>
                        <textarea className="form-control textarea" name="description" required maxLength="800" value={this.state.event.description} onChange={(e)=>this.handleChange(e)}/>
                    </div>
                    <div className="create-input">
                        <label>Price</label>
                        <div className="row">
                            <div className="col-4 col-sm-3 col-lg-3 p-0">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {this.state.currency}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" onClick={(ev)=>this.handleClick(ev)} id="IDR">IDR</a>
                                        <a className="dropdown-item" onClick={(ev)=>this.handleClick(ev)} id="USD">USD</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-8 col-sm-9 col-lg-6 p-0">
                                <input className="form-control" type="number" name="price" required value={parseInt(this.state.event.price)} onChange={(e)=>this.handleChange(e)}/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input" style={{width:"50%"}}>
                        <label>Slot</label>
                        <input className="form-control" type="number" name="slot" required value={this.state.event.slot} onChange={(e)=>this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Date</label></div>
                            <div className="row">
                                <input type="date" name="date" required className="partic-date-picker"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Time</label></div>
                            <div className="row">
                                <input type="time" name="time" required className="partic-date-picker"/>
                            </div>
                        </div>
                    </div>
                    <div className="create-input">
                        <label>Location</label>
                        <input className="form-control" type="text" name="location" required value={this.state.event.location} onChange={(e)=>this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 p-0 mb-3">
                            <div className="row"><label>Open Registration</label></div>
                            <div className="row">
                                <input type="date" name="openRegis" required className="partic-date-picker"/>
                            </div>
                        </div>
                        <div className=" col-12 col-md-6 p-0">
                            <div className="row"><label>Close Registration</label></div>
                            <div className="row">
                                <input type="date" name="closeRegis" required className="partic-date-picker"/>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 flex-wrap">
                        <button className="btn partic-btn partic-yellow-bg py-2 px-5 m-3">Contact Info</button>
                        <button className="btn partic-btn partic-yellow-bg py-2 px-5 m-3">Send Email</button>
                        <button className="btn partic-btn partic-yellow-bg py-2 px-5 m-3">Edit Event</button>
                    </div>
                    </form>
                </div>                
            </div>
        </React.Fragment>
    )}
}