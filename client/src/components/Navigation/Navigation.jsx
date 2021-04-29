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
import { Link, withRouter } from 'react-router-dom';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import useStyles from './styles';

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='relative'>
        <Toolbar ariaLabel='navigation' title='Navigation'>
          <NavigationDrawer />

          <Typography variant='h4' className={classes.title}>
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to='/shop'>
              ShopPortal
            </Link>
          </Typography>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to='/login'>
            <IconButton ariaLabel='login' titleAccess='Login' color='inherit'>
              <AccountIcon />
            </IconButton>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Cart'>
            <IconButton ariaLabel='cart' titleAccess='Cart' color='inherit'>
              <CartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navigation);
