import { makeStyles } from '@material-ui/core';
import { GridOnOutlined, MenuTwoTone } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import downArrowBtn from '../../image/down-arrow.svg';

const useStyles = makeStyles((theme) => ({
  collectionView: {
    position: 'relative',
    padding: theme.spacing(1),
    background: '#f6f8fa',
    width: '100%',
    display: 'flex',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: theme.spacing(0.1),
    marginBottom: theme.spacing(4),
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing(1),
  },

  changeViewIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing(3),
  },

  button: {
    margin: theme.spacing(0, 1),
    cursor: 'pointer',
  },

  unActiveBtn: {
    color: '#9d9d9d',
  },

  browseTags: {
    position: 'absolute',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0.5, 2, 0, 0),
  },

  sortBy: {
    textTransform: 'uppercase',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: theme.spacing(0.1),
    appearance: 'none',
    border: 'none',
    padding: theme.spacing(0, 3, 0, 0),
    background: `url(${downArrowBtn}) no-repeat right transparent`,
    '&:focus': {
      outline: 'none',
    },
  },
}));

const ToolbarTags = ({ currentSort, onChange }) => {
  const classes = useStyles();

  const handleSortChange = (e) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className={classes.collectionView}>
      <label className={classes.title}>View as</label>
      <div className={classes.changeViewIcons}>
        <GridOnOutlined className={classes.button} />
        <MenuTwoTone className={clsx(classes.button, classes.unActiveBtn)} />
      </div>
      <div className={classes.browseTags}>
        <select
          className={classes.sortBy}
          onChange={handleSortChange}
          value={currentSort}
        >
          <option value="salePrice:ASC">Sort by price: Low to high</option>
          <option value="salePrice:DESC">Sort by price: High to low</option>
          <option value="name:ASC">Sort by alphabetically,A-Z</option>
          <option value="name:DESC">Sort by alphabetically,Z-A</option>
          <option value="updated_at:ASC">Sort by date: Old to new</option>
          <option value="updated_at:DESC">Sort by date: New to old</option>
        </select>
      </div>
    </div>
  );
};

export default ToolbarTags;
