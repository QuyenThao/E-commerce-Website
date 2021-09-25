import React from 'react';
import Sidebar from '../../components/CheckoutItems/Sidebar';
import CheckoutItems from '../../components/CheckoutItems';
import useStyles from './styles';
import { Container } from '@material-ui/core';

const Checkout = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CheckoutItems />
      <Sidebar />
    </Container>
  );
};

export default Checkout;
