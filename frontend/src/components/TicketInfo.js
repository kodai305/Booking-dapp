import React from 'react';

class TicketInfo extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div> 
                <p align="left">issuer: {data && data[0]}</p>
                <p align="left">ticketName: {data && data.ticketName}</p>
                <p align="left">eventInfo: {data && data.eventInfo}</p>
                <p align="left">owner: {data && data[3]}</p>
                <p align="left">states: {data && data.status}</p>
            </div>
        );
    }
}
export default (TicketInfo);

{/*
var arr = [];
var obj = null;
this.state.tickets[0] ? obj = this.state.tickets[0] : obj = null;
obj && Object.keys(obj).forEach(function(key) {
    console.log("key:");
    console.log(key);
    console.log("value:");
    console.log(obj[key]);
    arr.push(obj[key]);
});
*/}