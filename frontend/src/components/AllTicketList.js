import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { getTicketNumber } from "../utils/ticketController"; 
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

function TicketList(props) {
    const num = props.num;

    return (
        // 即時関数 
        // 参考： https://webbibouroku.com/Blog/Article/react-jsx-if-for
        <div>
            { (() =>  {
                const items = [];
                for (let i = 0; i < num; i++) {
                    items.push(
                        <Card style={styles.card} key={i}>
                            <CardContent>
                                ticket {i} is exist
                        </CardContent>
                            <CardActions style={styles.button}>
                                <NavLink to="/TicketDetail"><Button variant="contained" color="primary" >詳細(参加確認画面へ)</Button></NavLink>
                            </CardActions>
                        </Card>    
                    );
                }
                return <ul>{items}</ul>;
            }) () } 
        </div>
    );
}

class AllTicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketNumber: 0,
        }
    }; 
    
    handleToConfirmPage = () => {
        this.props.history.push('/issue');
    }

    componentDidMount() {
        // fetch data and update state
        getTicketNumber().then(response => this.setState({ ticketNumber: response })).catch();
    }

    render() {
        return (
            <div>
                <TicketList num={this.state.ticketNumber} />
            </div>
        );
    }
}

AllTicketList.propTypes = {
    classes: PropTypes.object.isRequired,
};
   
export default withRouter(withStyles(styles)(AllTicketList));