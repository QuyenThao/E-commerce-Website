import { CircularProgress } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <CircularProgress className={classes.loading} />
      </div>
    </div>
  );
};

export default Loading;
