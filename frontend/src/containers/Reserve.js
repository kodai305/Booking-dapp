import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonAppBar from "../components/headerReserver";

import AllTicketList from '../components/AllTicketList'; //UT

const styles = {
    card: {
        margin: 48,
        height: 128
    },
        button: {
        justifyContent: 'center'
    }
};

class Reserve extends Component {
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
            <div className="reserve">
                <ButtonAppBar />
                <h2>this is reservation page</h2>
                <Button variant="raised" color="primary" onClick={this.onButtonClick}>チケット検索</Button>

                {this.state.showComponent ?
                    <AllTicketList /> : null
                }
            </div>
        );
    }
}

export default  (withStyles(styles)(Reserve));