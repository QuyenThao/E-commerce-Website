import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
  const classes = useStyles();
  const history = useHistory();

  const defaultThumbnail =
    'http://localhost:1337/uploads/product1_66a8587aaf.jpg';

  const thumbnailUrl = `http://localhost:1337${product.thumbnail[0].url}`;

  const thumbnailImage = product.thumbnail ? thumbnailUrl : defaultThumbnail;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.cardImage}>
        <CardMedia
          className={classes.media}
          image={thumbnailImage}
          title={product.name}
          onClick={handleClick}
        />
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
        <Typography
          className={classes.cardTitle}
          variant="h6"
          gutterBottom
          onClick={handleClick}
        >
          {product.name}
        </Typography>
        <Typography className={classes.cardPrice} variant="body2">
          <Box component="span" className={classes.originalPrice}>
            {product.originalPrice ? `$${product.originalPrice}.00` : ''}
          </Box>
          <Box component="span">${product.salePrice}.00</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
