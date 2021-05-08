import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';


const CircularLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default CircularLoader;
