import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../api/categoryApi';
import HeadingTags from '../HeadingTags';
import Product from './product/Product';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

function Products() {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [filters, setFilters] = useState({
    _limit: 12,
    _start: 0,
  });
  const [categoryTags, setCategoryTags] = useState({
    title: 'Furniture',
    limit: 12,
    start: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, category } = await categoryApi.get(filters);
        const featuresProducts = data[0].products;
        setProductList(featuresProducts);
        setCategoryTags(category);
      } catch (error) {
        console.log('fail to load data', error);
      }
    })();
  }, [filters]);

  const handleCategoryChange = (newTags) => {
    setFilters((prevTags) => ({
      ...prevTags,
      _title: newTags,
    }));
  };

  return (
    <main className={classes.root}>
      <HeadingTags
        categoryTags={categoryTags.title}
        onChange={handleCategoryChange}
      />
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

/*
import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';
import categoryApi from '../../api/categoryApi';
import Product from './product/Product';
import HeadingTags from '../HeadingTags';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

function Products(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [categoryTags, setCategoryTags] = useState({
    _title: 'Furniture',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await categoryApi.getAll();
        setProductList(data);
      } catch (error) {
        console.log('fail to load data', error);
      }
    })();
  }, []);
  console.log(productList);
  const handleCategoryTags = (e, newTag) => {
    console.log(newTag);
    setCategoryTags({
      _title: newTag,
    });
  };

  return (
    <main className={classes.root}>
      <HeadingTags categoryTags={categoryTags} onChange={handleCategoryTags} />
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

*/
