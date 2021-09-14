import { Box, Chip, makeStyles } from '@material-ui/core';
import React, { useMemo, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '22px 0 0 32px',
  },

  title: {
    textTransform: 'uppercase',
    fontSize: '14px',
  },
  list: {
    display: 'flex',
    flexFlow: 'row wrap',
    padding: 0,

    '& > li': {
      listStyleType: 'none',
      margin: theme.spacing(1),
      padding: '0',
    },
  },
  chip: {
    background: '#ebebeb',
    color: '#666',
    fontSize: '14px',
    borderRadius: '3px',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#fff',
      background: '#000',
      '& > svg': {
        color: '#fff',
      },
    },
  },
  clearBtn: {
    fontSize: '14px',
    color: '#666',
    cursor: 'pointer',
    width: 'fit-content',
    paddingBottom: '2px',
    borderBottom: '1px solid #666',
    transiiton: 'all 0.3s ease',
    '&:hover': {
      color: '#f50057',
      borderBottom: '1px solid #f50057',
    },
  },
}));

const FILTERS_LIST = [
  {
    id: 1,
    getLabel: (filters) => filters._size,
    isVisible: (filters) => Object.keys(filters).includes('_size'),
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters._size;
      return newFilters;
    },
  },

  {
    id: 2,
    getLabel: (filters) => filters._brand,
    isVisible: (filters) => Object.keys(filters).includes('_brand'),
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters._brand;
      return newFilters;
    },
  },

  {
    id: 3,
    getLabel: () => 'Promotion',
    isVisible: (filters) => JSON.parse(filters.isPromotion || false),
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
  },

  {
    id: 4,
    getLabel: () => 'Free Shipping',
    isVisible: (filters) => JSON.parse(filters.isFreeShip || false),
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isFreeShip;
      return newFilters;
    },
  },

  {
    id: 5,
    getLabel: (filters) => `${filters['categories.title']}`,
    isVisible: (filters) => filters['categories.title'],
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters['categories.title'];
      return newFilters;
    },
  },

  {
    id: 6,
    getLabel: (filters) =>
      `From ${filters.salePrice_gte}$ to ${filters.salePrice_lte}$`,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_gte') &
      Object.keys(filters).includes('salePrice_lte'),
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
  },
];

const FiltersViewer = ({ filters, onChange }) => {
  const classes = useStyles();
  const [defaultFilters, setDefaultFilters] = useState({
    _page: 1,
    _limit: 12,
    _sort: 'name:ASC',
  });

  const handleClick = () => {
    onChange(defaultFilters);
  };

  const visibleFilters = useMemo(() => {
    return FILTERS_LIST.filter((x) => x.isVisible(filters));
  }, [filters]);

  return (
    <div className={classes.root}>
      <div className={classes.title}>Filter By</div>
      <Box component="ul" className={classes.list}>
        {visibleFilters.map((x) => (
          <li key={x.id}>
            <Chip
              className={classes.chip}
              label={x.getLabel(filters)}
              onDelete={() => {
                if (!onChange) return;
                const newFilters = x.onRemove(filters);
                onChange(newFilters);
              }}
            />
          </li>
        ))}
      </Box>
      <div className={classes.clearBtn} onClick={handleClick}>
        Clear All
      </div>
    </div>
  );
};

export default FiltersViewer;
