import React, { Component } from 'react';
import IssueForm from '../components/form';

import { issueNewTicket } from "../utils/ticketController"; 
import ButtonAppBar from "../components/headerSponsor";

// 参考:
// https://qiita.com/yasudadesu/items/488becb22276e334559f
// https://qiita.com/yhosok/items/ab8e990403749690d846

class Issue extends Component {
    render() {
        return (
            <div className="Issue">
                <ButtonAppBar />
                <h1>
                    Issue ticket
                </h1>
                <IssueForm onSubmit={issueNewTicket} /> {/* Sendを押したときのロジック */}
            </div>
        );
    }
}

export default  Issue;