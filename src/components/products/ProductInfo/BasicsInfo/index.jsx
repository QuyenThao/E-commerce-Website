import { Box } from '@material-ui/core';
import { WhatshotRounded } from '@material-ui/icons';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import React from 'react';
import useStyles from './styles';

const BasicsInfo = ({ product }) => {
  const classes = useStyles();
  const { name, brand, originalPrice, salePrice } = product;

  return (
    <>
      <div className={classes.inventory}>
        <span>Many in stock</span>
      </div>
      <h1 className={classes.title}>{name}</h1>
      <div className={classes.meta}>
        <div className={classes.reviews}>
          <div className={classes.stars}>
            <StarOutlineRoundedIcon fontSize="small" className={classes.star} />
            <StarOutlineRoundedIcon fontSize="small" className={classes.star} />
            <StarOutlineRoundedIcon fontSize="small" className={classes.star} />
            <StarOutlineRoundedIcon fontSize="small" className={classes.star} />
            <StarOutlineRoundedIcon fontSize="small" className={classes.star} />
          </div>
          <span>No reviews</span>
        </div>
        <div className={classes.totalSold}>
          <WhatshotRounded className={classes.fireIcon} />
          <span> 21 sold in last 3 hours</span>
        </div>
      </div>
      <div className={classes.vendor}>
        Vendor:
        <span className={classes.brand}>{brand}</span>
      </div>
      <div className={classes.sku}>
        SKU:
        <span className={classes.prices}>
          <Box component="span" className={classes.originalPrice}>
            {originalPrice ? `$${originalPrice}.00` : ''}
          </Box>
          <Box component="span">${salePrice}.00</Box>
        </span>
      </div>
    </>
  );
};

export default BasicsInfo;
