import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import InfomationForm from './InfomationForm';
const CheckoutItems = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/" className={classes.title}>
        cleversoft-kodo
      </Link>
      <InfomationForm />
    </div>
  );
};

export default CheckoutItems;
