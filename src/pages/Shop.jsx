import { Container, Grid, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import productApi from '../api/productApi';
import BreadcumbPosition from '../components/BreadcrumbPosition';
import FiltersViewer from '../components/products/FiltersViewer';
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
  filtersViewer: {
    margin: '22px 0 0 32px',
  },
}));

function Shop(props) {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      _sort: params._sort || 'name:ASC',
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 12,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('fail to load data', error);
      }
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const setNewFilters = (newFilters) => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  return (
    <>
      <BreadcumbPosition />
      <Container spacing={3} className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.left}>
            <h2 className={classes.title}>Products ({pagination.total})</h2>
            <ToolbarTags
              currentSort={queryParams._sort}
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
            <FiltersViewer filters={queryParams} onChange={setNewFilters} />
            <ProductsFilters
              filters={queryParams}
              onChange={handleFiltersChange}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
