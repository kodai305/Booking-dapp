import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getTicketIds } from "../utils/ticketController"; 
import { getTicketInfo } from "../utils/ticketController"; 
import { approveToParticipate } from "../utils/ticketController";
import TicketInfo from "./TicketInfo";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

//import TicketDetail from "../containers/TicketDetail";

// 遷移
// 参考： http://okamuuu.hatenablog.com/entry/2017/03/23/140650

const styles = {
    card: {
        margin: 28,
        height: 128
    },
    button: {
        justifyContent: 'right'
    }
};

class IssuedTicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: [],
            tickets: [],
            expanded: false,
        }
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }; 

    async onClick(ticketId) {
	console.log("ticketId:");
	console.log(ticketId);
	var ret = await approveToParticipate(ticketId);
	console.log(ret);
    }

    async getTicketInfo() {
        var _TicketInfos = [];
        if (!this.state.ids) {
            return;
        }
        for (let id of this.state.ids) {
            console.log("id: " + id);
            var ret = await getTicketInfo(id);
            console.log(ret);
            var retJsonString = JSON.stringify(ret, null, 2);
            var retJson = JSON.parse(retJsonString);
            _TicketInfos.push(retJson);
        }
        this.setState({ tickets: _TicketInfos });
    };

    async componentDidMount() {
        // fetch data and update state
        await getTicketIds().then(response => this.setState({ ids: response })).catch();
        await this.getTicketInfo();
    }
    
    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
        console.log(this.state.expanded);
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h2>チケット一覧</h2>
		{   !this.state.ids && <span> there is no tickets </span> }

                {
		    this.state.ids && this.state.ids.map((id, index) =>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>チケット {id}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                    <TicketInfo data={this.state.tickets[index]} key={id} />
                            </ExpansionPanelDetails>
                            <Divider />
                            <ExpansionPanelActions>
                                <Button variant="contained" color="primary" onClick={this.onClick.bind(this, id)}>承認</Button>
                            </ExpansionPanelActions>
                        </ExpansionPanel>
                    )
                }
            </div>
        );
    }
}

IssuedTicketList.propTypes = {
    classes: PropTypes.object.isRequired,
};
   
export default withRouter(withStyles(styles)(IssuedTicketList));
