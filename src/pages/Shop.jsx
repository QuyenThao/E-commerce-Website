import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import BreadcumbPosition from '../components/BreadcrumbPosition';
import ProductList from '../components/products/ProductList';
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
    width: theme.spacing(34),
  },
  title: {
    fontSize: '26px',
    marginBottom: '15px',
    fontWeight: '400',
  },
}));

function Shop(props) {
  const classes = useStyles();
  return (
    <>
      <BreadcumbPosition />
      <Container spacing={3} className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.left}>
            <h2 className={classes.title}>Products (29)</h2>
            <ToolbarTags />
            <ProductList />
          </Grid>
          <Grid item className={classes.right}>
            Content Right
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
