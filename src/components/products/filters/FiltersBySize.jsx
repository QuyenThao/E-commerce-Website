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
      fontSize: '14px',
      listStyleType: 'none',
      padding: theme.spacing(0.8, 1.2),
      marginRight: theme.spacing(1),
      background: '#f6f8fa',
      cursor: 'pointer',
      animation: 'all 0.3s ease',
      '&:hover': {
        background: '#f13958',
        color: '#fff',
      },
    },
  },
}));

const FiltersBySize = ({ onChange }) => {
  const classes = useStyles();

  const handleClick = (value) => {
    if (onChange)
      onChange({
        _size: value.name,
      });
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>Size</div>

      <Box className={classes.filter}>
        <ul className={classes.list}>
          {[
            { id: 1, name: 'X' },
            { id: 2, name: 'XS' },
            { id: 3, name: 'S' },
            { id: 4, name: 'M' },
            { id: 5, name: 'L' },
            { id: 6, name: 'XL' },
          ].map((size) => (
            <li key={size.id} onClick={() => handleClick(size)}>
              {size.name}
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default FiltersBySize;
