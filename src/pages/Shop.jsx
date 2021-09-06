import { Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import BreadcumbPosition from '../components/BreadcrumbPosition';
import ProductList from '../components/products/ProductList';
import ProductsFilters from '../components/products/ProductsFilters';
import ToolbarTags from '../components/ToolbarTags';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  gridContainer: {
    flexWrap: 'nowrap',
  },
  left: {
    flex: '1 1 0',
  },

  right: {
    width: theme.spacing(36),
  },
  title: {
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: '400',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
  filters: {
    margin: '220px 0 0 16px',
  },
}));

function Shop(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 12,
    page: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
    _sort: 'name:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('fail to load data', error);
      }
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <>
      <BreadcumbPosition />
      <Container spacing={3} className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.left}>
            <h2 className={classes.title}>Products ({pagination.total})</h2>
            <ToolbarTags
              currentSort={filters._sort}
              onChange={handleSortChange}
            />
            <ProductList data={productList} />
            <Pagination
              className={classes.pagination}
              color="secondary"
              count={Math.ceil(pagination.total / pagination.limit)}
              page={pagination.page}
              onChange={handlePageChange}
            />
          </Grid>
          <Grid item className={classes.right}>
            <ProductsFilters filters={filters} onChange={handleFiltersChange} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
