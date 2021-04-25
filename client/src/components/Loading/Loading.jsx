import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';

const Loading = () => {
  const classes = useStyles();

  // TO DO: Need to style something. Right now just plain text when loading 
  return (
    <Container className={classes.root} component='main' maxWidth='xs'>
      <Typography variant='body2' color='textSecondary' component='p'>
        Loading...
      </Typography>
    </Container>
  );
};

export default Loading;
