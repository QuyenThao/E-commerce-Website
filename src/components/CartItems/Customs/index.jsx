import {
  ClearRounded,
  CreditCardOutlined,
  KeyboardBackspaceRounded,
} from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import useStyles from './styles';

const Customs = ({ onClick }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleTurnBack = () => {
    history.push('/products');
  };

  const handleCheckout = () => {
    history.push('/checkout');
  };
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.turnBack} onClick={handleTurnBack}>
          <KeyboardBackspaceRounded className={classes.icon} />
          <span className={classes.text}>Continue Shopping</span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.clear} onClick={onClick}>
          <ClearRounded className={classes.icon} />
          <span className={classes.text}>Clear Shopping Cart</span>
        </div>
        <div className={classes.checkout} onClick={handleCheckout}>
          <CreditCardOutlined className={classes.icon} />
          <span className={classes.text}>Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Customs;
