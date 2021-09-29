import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllCart } from '../../components/Auth/cartSlice';
import {
  cartItemsSelector,
  cartTotalSelector,
} from '../../components/Auth/selectors';
import CheckoutItems from '../../components/CheckoutItems';
import Sidebar from '../../components/CheckoutItems/Sidebar';
import useStyles from './styles';

const Checkout = () => {
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const classes = useStyles();
  const dispatch = useDispatch();
  const items = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const [productItems, setProductItems] = useState(items);
  const [total, setTotal] = useState(cartTotal);

  const refreshCart = async () => {
    const action = clearAllCart();
    dispatch(action);
  };

  const handleCaptureCheckout = async (orders) => {
    try {
      setOrder(orders);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
  return (
    <Container className={classes.root}>
      <CheckoutItems
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}
      />
      <Sidebar productItems={productItems} total={total} />
    </Container>
  );
};

export default Checkout;
