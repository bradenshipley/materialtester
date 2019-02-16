import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar'
//import material ui shit
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

function Navbar(props) {
  const { classes } = props;
  console.log(props.user)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" align="left" className={classes.grow}>
            Ordeer
          </Typography>
          {!Object.keys(props.user).length ?
            <Button color="inherit" onClick={props.login}>Login</Button>
            : <Avatar profile={props.user.photoURL}
              anchorEl={props.anchorEl}
              handleClose={props.handleClose}
              handleClick={props.handleClick}
              logout={props.logout}
            />
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
