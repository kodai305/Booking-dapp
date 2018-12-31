import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonAppBar from "../components/headerReserver";

const styles = {
    card: {
        margin: 48,
        height: 128
    },
    button: {
        justifyContent: 'center'
    }
};

class ConfirmTicket extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar />
                <h2>this is the page that sponsor confirm tickets.</h2>
            </div>
        );
    }
}

export default (withStyles(styles)(ConfirmTicket));