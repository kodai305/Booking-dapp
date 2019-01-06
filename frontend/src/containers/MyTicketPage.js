import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ButtonAppBar from "../components/headerReserver";
import MyTicketList from '../components/MyTicketList';

const styles = {
    card: {
        margin: 48,
        height: 128
    },
        button: {
        justifyContent: 'center'
    }
};

class MyTicketPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        this.setState({
          showComponent: true,
        });
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <h2>this is the page that sponsor confirm tickets.</h2>
                <Button　variant="contained"　color="primary" onClick={this.onButtonClick}>保有チケットの確認</Button>
                
                {this.state.showComponent ?
                    <MyTicketList/> : null
                }
            </div>
        );
    }
}

export default (withStyles(styles)(MyTicketPage));