import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Review from './Review';
import ReviewsForm from './ReviewsForm';
import useStyles from './styles';

const Reviews = () => {
  const classes = useStyles();
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleSubmit = (values) => {
    setData((prev) => [...prev, values]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>Customer Reviews</div>
        <div className={classes.reviews}>
          <div className={classes.content}>
            {data.length !== 0
              ? data.map((item, index) => (
                  <li key={index} className={classes.item}>
                    <Review data={item} />
                  </li>
                ))
              : 'No reviews yet'}
          </div>
          <Button className={classes.btn} onClick={handleClick}>
            Write a Review
          </Button>
        </div>
      </div>

      {isOpen ? <ReviewsForm onSubmit={handleSubmit} /> : ''}
    </div>
  );
};

export default Reviews;
