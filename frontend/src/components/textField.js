import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
});

const textField = props => {
    const { input, classes, ...custom } = props;
    return (
        <TextField
            {...input}
            {...custom}
            className={classes.textField}
        />
    );
}

textField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(textField);