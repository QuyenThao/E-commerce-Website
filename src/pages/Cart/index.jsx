import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllCart } from '../../components/Auth/cartSlice';
import {
  cartItemsSelector,
  cartTotalSelector,
} from '../../components/Auth/selectors';
import BreadcumbPosition from '../../components/BreadcrumbPosition';
import CartItems from '../../components/CartItems';
import Customs from '../../components/CartItems/Customs';
import EmptyCart from '../../components/CartItems/EmptyCart';
import useStyles from './styles';

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const items = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const isEmpty = !items.length;

  const handleClear = () => {
    const action = clearAllCart();
    dispatch(action);
  };

  return (
    <>
      <BreadcumbPosition text="Your Shopping Cart" />
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          My Cart
        </Typography>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <CartItems items={items} cartTotal={cartTotal} />
            <Customs onClick={handleClear} />
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
