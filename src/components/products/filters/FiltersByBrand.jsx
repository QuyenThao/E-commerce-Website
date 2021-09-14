import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: '1px solid #ebebeb',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '14px',
  },

  filter: {
    marginTop: theme.spacing(2),
  },

  list: {
    display: 'flex',
    padding: '0',
    margin: theme.spacing(2, 0, 0, 0),
    '& > li': {
      color: '#666',
      fontSize: '14px',
      listStyleType: 'none',
      marginRight: theme.spacing(1.5),
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#f13958',
      },
    },
  },
}));

const FiltersByBrand = ({ onChange }) => {
  const classes = useStyles();

  const handleClick = (value) => {
    if (onChange)
      onChange({
        _brand: value.name,
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>Brand</div>

      <Box className={classes.filter}>
        <ul className={classes.list}>
          {[
            { id: 1, name: 'Gucci' },
            { id: 2, name: 'Nike' },
            { id: 3, name: 'Zalo' },
            { id: 4, name: 'Amarni' },
            { id: 5, name: 'PoloClub' },
          ].map((brand) => (
            <li key={brand.id} onClick={() => handleClick(brand)}>
              {brand.name}
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default FiltersByBrand;
