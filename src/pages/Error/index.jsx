import { Button, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Error(props) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.content}>
        <div className={classes.title}>404</div>
        <div className={classes.subtitle}>Page not found</div>
        <div className={classes.text}>
          Sorry, we couldn't find the page you’re looking for.
        </div>
        <Button component={Link} to="/" className={classes.btn}>
          Go to Home
        </Button>
      </div>
    </Container>
  );
}

export default Error;
