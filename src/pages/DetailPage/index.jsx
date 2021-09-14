import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import BreadcumbPosition from '../../components/BreadcrumbPosition';
import useProductDetails from '../../components/products/hooks/useProductDetails';
import ProductInfo from '../../components/products/ProductInfo';
import ProductThumbnails from '../../components/products/ProductThumbnails';
import useStyles from './styles';

const DetailPage = () => {
  const classes = useStyles();

  const {
    params: { productId },
  } = useRouteMatch();
  const { loading, product } = useProductDetails(productId);
  // console.log(product);
  const { name } = product;
  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      <BreadcumbPosition text={name} />
      <Container spacing={3} className={classes.root}>
        <Grid container>
          <Grid item className={classes.left}>
            <ProductThumbnails product={product} />
          </Grid>
          <Grid item className={classes.right}>
            <ProductInfo product={product} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailPage;
