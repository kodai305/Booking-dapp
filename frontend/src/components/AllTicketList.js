import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getTicketNumber } from "../utils/ticketController"; 
import { getTicketInfo } from "../utils/ticketController"; 
import { reserveTicket } from "../utils/ticketController";
//import TicketDetail from "../containers/TicketDetail";

const styles = {
    card: {
        margin: 28,
        height: 128
    },
    button: {
        justifyContent: 'center'
    }
};

class AllTicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketNumber: 0,
            tickets: [],
            expanded: false,
        }
    }; 

    async onClick(ticketId) {
        console.log('チケット ' + ticketId + ' を買うよ！')
        var ret = await reserveTicket(ticketId);
        console.log(ret);
    }

    async getTicketInfo() {
        var _TicketInfos = [];
        for (let id = 0; id < this.state.ticketNumber; id++) {
            console.log("id: "+id);
            var ret = await getTicketInfo(id);
            console.log(ret);
            var retJson = JSON.stringify(ret, null, 2);
            _TicketInfos.push(retJson);
        }
        this.setState({ tickets: _TicketInfos });
    };

    async componentDidMount() {
        // fetch data and update state
        await getTicketNumber().then(response => this.setState({ ticketNumber: response })).catch();
        await this.getTicketInfo();
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2>チケット一覧</h2>
                {
                    this.state.tickets.map((ticket, index) =>
                        <ExpansionPanel key={index}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>チケット {index}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    {ticket} 
                                </Typography>
                                <Button variant="contained" color="primary"　onClick={this.onClick.bind(this, index)}>予約</Button>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                }
            </div>
        );
    }
}

AllTicketList.propTypes = {
    classes: PropTypes.object.isRequired,
};
   
export default withRouter(withStyles(styles)(AllTicketList));