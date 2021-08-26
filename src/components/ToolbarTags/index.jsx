import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import {
  GridOff,
  GridOnOutlined,
  GridOnTwoTone,
  KeyboardArrowDownRounded,
  MenuTwoTone,
} from '@material-ui/icons';
import clsx from 'clsx';
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

const ToolbarTags = () => {
  const classes = useStyles();
  return (
    <div className={classes.collectionView}>
      <label className={classes.title}>View as</label>
      <div className={classes.changeViewIcons}>
        <GridOnOutlined className={classes.button} />
        <MenuTwoTone className={clsx(classes.button, classes.unActiveBtn)} />
      </div>
      <div className={classes.browseTags}>
        <select className={classes.sortBy}>
          <option value="1">Sort by feature</option>
          <option value="2">Sort by price: Low to high</option>
          <option value="3">Sort by price: High to low</option>
          <option value="4" selected="selected">
            Sort by alphabetically,A-Z
          </option>
          <option value="5">Sort by alphabetically,Z-A</option>
          <option value="6">Sort by date: Old to new</option>
          <option value="7">Sort by date: New to old</option>
          <option value="8">Sort by best selling</option>
        </select>
      </div>
    </div>
  );
};

export default ToolbarTags;
