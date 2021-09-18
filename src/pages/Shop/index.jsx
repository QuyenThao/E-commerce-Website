import { Container, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import BreadcumbPosition from '../../components/BreadcrumbPosition';
import FiltersViewer from '../../components/products/FiltersViewer';
import ProductList from '../../components/products/ProductList';
import ProductsFilters from '../../components/products/ProductsFilters';
import ToolbarTags from '../../components/ToolbarTags';
import productApi from '../../api/productApi';
import useStyles from './styles';
import Loading from '../../components/Loading';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('fail to load data', error);
      }

      setLoading(false);
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
      <BreadcumbPosition text="Products" />
      <Container spacing={3} className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.left}>
            <h2 className={classes.title}>Products ({pagination.total})</h2>
            <ToolbarTags
              currentSort={queryParams._sort}
              onChange={handleSortChange}
            />
            {loading ? <Loading /> : <ProductList data={productList} />}

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
