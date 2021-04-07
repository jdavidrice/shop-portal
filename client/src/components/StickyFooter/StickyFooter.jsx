import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import useStyles from './styles';
import IconButton from '@material-ui/core/IconButton';
import {
  Instagram,
  Twitter,
  Facebook,
} from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/davidsaulrodriguez/shop-portal" target="_blank" rel="noreferrer noopener">
        ShopPortal Group
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const StickyFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Admin Login</Typography>
          <Typography variant="body1">Contact Us</Typography>
          <Typography variant="body1">Follow Us</Typography>
          <IconButton color='inherit'>
            <Instagram />
          </IconButton>
          <IconButton color='inherit'>
            <Twitter />
          </IconButton>
          <IconButton color='inherit'>
            <Facebook />
          </IconButton>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default StickyFooter;
