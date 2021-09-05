import React from 'react';
import FiltersByCategory from './filters/FiltersByCategory';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  filters: {
    margin: '22px 0 0 32px',
  },
}));

function ProductsFilters({ filters, onChange }) {
  const classes = useStyles();

  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      'categories.id': newCategoryId,
    };
    onChange(newFilters);
  };

  return (
    <div className={classes.filters}>
      <FiltersByCategory onChange={handleCategoryChange} />
    </div>
  );
}

export default ProductsFilters;
