import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        margin: 48,
        height: 128
    },
    button: {
        justifyContent: 'center'
    }
};

class Home extends Component {
    handleToIssuePage = () => {
        this.props.history.push('/issue')
    }

    handleToReservePage = () => {
        this.props.history.push('/reserve')
    }

    render() {
        const classes = this.props.classes;
        console.log(classes);

        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Home of Booking Dapp
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Card className={classes.card}>
                    <CardContent>
                        イベント主催者用のページ
                    </CardContent>
                    <CardActions className={classes.button}>
                        <Button variant="raised" color="primary" onClick={this.handleToIssuePage}>Go</Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        予約者用のページ
                    </CardContent>
                    <CardActions className={classes.button}>
                        <Button variant="raised" color="primary" onClick={this.handleToReservePage}>Go</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default  withRouter(withStyles(styles)(Home));

