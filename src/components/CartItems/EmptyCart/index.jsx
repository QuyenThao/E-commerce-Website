import { LocalMallOutlined } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const EmptyCart = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LocalMallOutlined className={classes.cart} />
      <div className={classes.title}>Your Cart Is Empty</div>
      <div className={classes.text}>
        You have no items in your shopping cart.
      </div>

      <Link to="/" className={classes.btn}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
