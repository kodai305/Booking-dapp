// AppBar
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

//DrawerSideMenu
import DrawerSideMenu from './drawers-side-menu-reserver';
 
// BarColor
import red from '@material-ui/core/colors/red';
const red400 = red[400];

// AppBar
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  colorPrimary: {
    backgroundColor: red400,
  },
};
 
function ButtonAppBar(props) {
  const { classes } = props;
 
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <DrawerSideMenu /> 
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            reserver's page
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(ButtonAppBar);