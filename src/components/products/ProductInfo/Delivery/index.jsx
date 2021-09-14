import React from 'react';
import useStyles from './styles';

const SHIPPING_LIST = [
  'Complimentary ground shipping within 1 to 7 business days',
  'In-store collection available within 1 to 7 business days',
  'Next-day and Express delivery options also available',
  'Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain item',
  'See the delivery FAQs for details on shipping methods, costs and delivery times',
];

const RETURNS_LIST = [
  'Easy and complimentary, within 14 days',
  'See conditions and procedure in our return FAQs',
];

const Delivery = () => {
  const classes = useStyles();
  return (
    <div className={classes.delivery}>
      <div className={classes.item}>
        <div className={classes.title}>Shipping</div>
        <ul>
          {SHIPPING_LIST.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Return and Exchanges</div>
        <ul>
          {RETURNS_LIST.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Delivery;
