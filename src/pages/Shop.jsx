import React from 'react';
import Navbar from '../components/navbar/Navbar';
import BreadcumbPosition from '../components/BreadcrumbPosition';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ToolbarTags from '../components/ToolbarTags';
import ProductList from '../components/products/ProductList';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  left: {
    flex: '1 1 auto',
  },

  right: {
    width: '330px',
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
        <Grid container>
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
