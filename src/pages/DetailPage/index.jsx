import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import BreadcumbPosition from '../../components/BreadcrumbPosition';
import Loading from '../../components/Loading';
import useProductDetails from '../../components/products/hooks/useProductDetails';
import ProductInfo from '../../components/products/ProductInfo';
import ProductMenu from '../../components/products/ProductMenu';
import CustomTab from '../../components/products/ProductMenu/CustomTab';
import Description from '../../components/products/ProductMenu/Description';
import Reviews from '../../components/products/ProductMenu/Reviews';
import ProductThumbnails from '../../components/products/ProductThumbnails';
import useStyles from './styles';

const DetailPage = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  const {
    params: { productId },
  } = useRouteMatch();
  const { loading, product } = useProductDetails(productId);
  const { name } = product;
  if (loading) {
    return <Loading />;
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
        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <Description product={product} />
          </Route>
          <Route path={`${url}/reviews`} component={Reviews} />
          <Route path={`${url}/custom-tab1`} component={CustomTab} />
          <Route path={`${url}/custom-tab2`} component={CustomTab} />
        </Switch>
      </Container>
    </>
  );
};

export default DetailPage;
