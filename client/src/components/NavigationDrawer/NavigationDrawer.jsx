import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import {
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import {
  GitHub as SourceCode,
  Email as ContactIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  LocalMall as ShoppingBagIcon,
  Menu as MenuIcon,
  VpnKey as LoginIcon,
} from '@material-ui/icons';
import {
  useHistory,
  useLocation,
  withRouter,
  Link as RouterLink,
} from 'react-router-dom';

const NavigationDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [state, setState] = React.useState({
    right: false,
  });

  const navItems = [
    { linkTitle: 'Home', pageURL: '/', icon: <HomeIcon /> },
    { linkTitle: 'Shop', pageURL: '/shop', icon: <ShoppingBagIcon /> },
    { linkTitle: 'About', pageURL: '/about', icon: <InfoIcon /> },
    { linkTitle: 'Contact', pageURL: '/contact', icon: <ContactIcon /> },
    { linkTitle: 'Login', pageURL: '/login', icon: <LoginIcon /> },
  ];

  const extLinks = [
    {
      linkTitle: 'Source Code',
      pageURL: 'https://github.com/davidsaulrodriguez/shop-portal',
      icon: <SourceCode />,
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={() =>toggleDrawer(anchor, false)}
      onKeyDown={() =>toggleDrawer(anchor, false)}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.linkTitle}
            button
            component={RouterLink}
            to={item.pageURL}
            onClick={() => history.push(item.pageURL)}
            className={
              location.pathname == item.pageURL ? classes.active : null
            }>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.linkTitle} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {extLinks.map((item) => (
          <ListItem
            key={item.linkTitle}
            button
            component={Link}
            href={item.pageURL}
            target='_blank'
            rel='noopener'>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.linkTitle} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography varient='p' align='center'>
        &copy; 2021, ShopPortal Group
      </Typography>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button color='inherit' onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default withRouter(NavigationDrawer);
