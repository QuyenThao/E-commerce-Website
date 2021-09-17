import { Rating } from '@material-ui/lab';
import React from 'react';
import useStyles from './styles';

const Review = ({ data }) => {
  const classes = useStyles();
  const { name, email, title, reviewBody } = data;

  return (
    <div className={classes.root}>
      <div className={classes.name}>{name}</div>
      <div className={classes.email}>{email}</div>
      <Rating
        name="read-only"
        value={5}
        size="small"
        readOnly
        className={classes.rating}
      />
      <div className={classes.title}>{title}</div>
      <div className={classes.comment}>{reviewBody}</div>
    </div>
  );
};

export default Review;
