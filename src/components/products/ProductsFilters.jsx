import React from 'react';
import FiltersByCategory from './filters/FiltersByCategory';
import FiltersByPrice from './filters/FiltersByPrice';
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
      'categories.id': newCategoryId,
    };
    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <div className={classes.filters}>
      <FiltersByCategory onChange={handleCategoryChange} />
      <FiltersByPrice onChange={handlePriceChange} />
    </div>
  );
}

export default ProductsFilters;
