import React from 'react';
import {
  AppBar,
  // Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  ShoppingCart as CartIcon,
  AccountCircle as AccountIcon,
} from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import useStyles from './styles';

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='relative'>
        <Toolbar>
          <NavigationDrawer />

          <Typography variant='h4' className={classes.title}>
            ShopPortal
          </Typography>

          <IconButton color='inherit'>
            <AccountIcon />
          </IconButton>
          <IconButton color='inherit'>
            <CartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navigation);
