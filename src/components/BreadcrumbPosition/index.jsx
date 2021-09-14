import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#f6f8fa',
    padding: '1.2rem 0',
    fontSize: '14px',
  },
  backHome: {
    textDecoration: 'none',
    color: '#000',
  },
  dot: {
    width: '4px',
    height: '4px',
    background: '#959595',
    display: 'inline-block',
    borderRadius: '100%',
    margin: '.1rem 1rem',
  },
  text: {
    color: '#959595',
  },
}));

function BreadcumbPosition({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Link to="/" title="Back to the frontpage" className={classes.backHome}>
          Home
        </Link>
        <span className={classes.dot}></span>
        <span className={classes.text}>{text}</span>
      </Container>
    </div>
  );
}

export default BreadcumbPosition;
