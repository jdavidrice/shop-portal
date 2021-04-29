import React from 'react';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import CircularLoader from '../CircularLoader/CircularLoader'

const Loading = () => {
  const classes = useStyles();
 
  return (
    <Container className={classes.root} component='main' maxWidth='xs'>
      <Typography className={classes.flexObject} variant='h5' color='textSecondary' component='p'>
        Loading...
      </Typography>
      <CircularLoader className={classes.flexObject} />
    </Container>
  );
};

export default Loading;
