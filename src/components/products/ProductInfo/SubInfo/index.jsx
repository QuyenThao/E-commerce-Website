import {
  AccessAlarmRounded,
  LocalShipping,
  PeopleOutlined,
} from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const SubInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.viewCountdown}>
        <span>
          <AccessAlarmRounded className={classes.icon} />
        </span>
        <div className={classes.text}>
          Order in The Next{' '}
          <span className={classes.time}>10 hours 23 minutes</span> to get it by{' '}
          <span className={classes.day}>Thursday 09/16/2021</span>{' '}
        </div>
      </div>
      <div className={classes.visitors}>
        <span>
          <PeopleOutlined className={classes.icon} />
        </span>
        <div className={classes.text}>
          Real Time{' '}
          <span className={classes.number}>
            {Math.round(Math.random() * 40)}
          </span>{' '}
          Visitors Right Now
        </div>
      </div>
      <div className={classes.shipping}>
        <span>
          <LocalShipping className={classes.icon} />
        </span>
        <div className={classes.text}>
          Spend <span className={classes.money}>$200.00 USD</span> to get Free
          Shipping
        </div>
      </div>
    </div>
  );
};

export default SubInfo;
