import { makeStyles } from '@material-ui/core';
import React from 'react';
import FiltersByBrand from './filters/FiltersByBrand';
import FiltersByCategory from './filters/FiltersByCategory';
import FiltersByPrice from './filters/FiltersByPrice';
import FiltersByServices from './filters/FiltersByServices';
import FiltersBySize from './filters/FiltersBySize';

const useStyles = makeStyles((theme) => ({
  filters: {
    margin: '22px 0 0 32px',
  },
}));

function ProductsFilters({ filters, onChange }) {
  const classes = useStyles();

  const handleCategoryChange = (newCategoryTitle) => {
    if (!onChange) return;

    const newFilters = {
      'categories.title': newCategoryTitle,
    };
    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <div className={classes.filters}>
      <FiltersByCategory onChange={handleCategoryChange} />
      <FiltersByServices filters={filters} onChange={handleChange} />
      <FiltersByPrice onChange={handleChange} />
      <FiltersBySize onChange={handleChange} />
      <FiltersByBrand onChange={handleChange} />
    </div>
  );
}

export default ProductsFilters;
