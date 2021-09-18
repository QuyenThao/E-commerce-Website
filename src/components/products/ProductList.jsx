import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Product from './product/Product';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

function Products({ data }) {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      {' '}
      <Grid container spacing={4}>
        {data.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={4} lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
