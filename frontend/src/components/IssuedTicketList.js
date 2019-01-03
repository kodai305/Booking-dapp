import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { getTicketIds } from "../utils/ticketController"; 
//import TicketDetail from "../containers/TicketDetail";

// 遷移
// 参考： http://okamuuu.hatenablog.com/entry/2017/03/23/140650

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
    const ids = props.ids;
    
    /*
    課題： ids がゼロのときの挙動
    */
    //var ticketList;
    console.log("ids:");
    console.log(ids);
    //if (ids.map) {
    const ticketList = ids.map((id) =>
            <Card style={styles.card} key={id}>
                <CardContent>
                    ticket {id} is exist
            </CardContent>
                <CardActions style={styles.button}>
                    <NavLink to="/TicketDetail"><Button variant="contained" color="primary" >詳細(参加確認画面へ)</Button></NavLink>
                </CardActions>
            </Card>
        );
//    }
    return (
        <div>
            {ids > 0 ? <span>チケット一覧</span> : <span>発行したチケットはありません</span>}
            {ticketList}
        </div>
    );
}

class IssuedTicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: [],
        }
    }; 
    
    handleToConfirmPage = () => {
        this.props.history.push('/issue');
    }

    componentDidMount() {
        // fetch data and update state
        getTicketIds().then(response => this.setState({ ids: response })).catch();
    }

    render() {
        return (
            <div>
                <TicketList ids={this.state.ids} />
            </div>
        );
    }
}

IssuedTicketList.propTypes = {
    classes: PropTypes.object.isRequired,
};
   
export default withRouter(withStyles(styles)(IssuedTicketList));