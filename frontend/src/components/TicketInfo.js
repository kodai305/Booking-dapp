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
                <p align="left">status: {data && data.status}</p>
            </div>
        );
    }
}
export default (TicketInfo);
