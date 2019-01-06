import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonAppBar from "../components/headerReserver";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { getTicketInfo } from "../utils/ticketController"; 

const styles = {
    card: {
        margin: 56,
        height: 320
    },
    button: {
        justifyContent: 'center'
    }
};

class TicketDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketInfo: "",
        }
    }; 

    componentDidMount() {
        // fetch data and update state
        getTicketInfo().then(response => this.setState({ ticketInfo: response })).catch();
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <h1>チケット詳細</h1>
                <Card style={styles.card}>
                    <CardContent>
                        <h4>チケット名：</h4>
                        <h4>イベント情報：</h4>
                        <h4>発行者：</h4>
                        <h4>状態：</h4>
                    </CardContent>
                    <CardActions style={styles.button}>
                        <Button variant="contained" color="primary"> 参加済みにする </Button>        
                    </CardActions>  
                </Card>
            </div>
        );
    }
}

export default TicketDetail;