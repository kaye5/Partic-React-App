import React from 'react'

export default function Participant(){
    const participant = {
        id : "#TIW00",
        name : "Partic",
        email : "Partic@partic.com",
    }
    function setStatusColor(status){
        if(status === 'ATTENDED') {
            return ''
        } else {
            return 'text-danger'
        }
    }
    function renderParticipant(){
        let element = [];
        for (let index = 1; index <= 10; index++) {
            let status;
            if(index % 3 === 0 )
                status = 'NOT ATTENDED'
            else 
                status = 'ATTENDED'
            element.push(
                <tr key={index}>
                    <td>{participant.id+index}</td>
                    <td>{participant.name}</td>
                    <td>{participant.email}</td>
                    <td className={'font-weight-bold '+setStatusColor(status)}>{status}</td>
                </tr>
            )
        }
        return element
    }
    return (
        <React.Fragment>
            <div className="row">
                <h2><b>Participant</b></h2>
            </div>
            <div className="row">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>No.Ticket</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderParticipant()}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}