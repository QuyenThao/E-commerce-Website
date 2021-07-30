import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box className={classes.cardImage}>
        <Link to="/">
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
        </Link>
        <div className={classes.overlay}>
          <Button
            variant="contained"
            color="primary"
            className={classes.addToCartBtn}
          >
            ADD TO CART
          </Button>
        </div>
      </Box>
      <CardContent className={classes.cardContent}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography className={classes.cardTitle} variant="h6" gutterBottom>
            {product.name}
          </Typography>
        </Link>
        <Typography className={classes.cardPrice} variant="body2">
          <Box component="span" className={classes.originalPrice}>
            {product.originalPrice}
          </Box>
          <Box component="span">{product.salePrice}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
