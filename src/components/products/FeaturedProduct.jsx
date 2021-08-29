import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import Product from './product/Product';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

function Products(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 12 });
        setProductList(data);
      } catch (error) {
        console.log('fail to load data', error);
      }
    })();
  }, []);
  return (
    <main className={classes.root}>
      <Grid container justify="Content" spacing={4}>
        {productList.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
