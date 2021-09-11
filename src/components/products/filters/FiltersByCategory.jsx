import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../../api/categoryApi';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(1),
    borderBottom: '1px solid #ebebeb',
  },

  title: {
    textTransform: 'uppercase',
    fontSize: '14px',
  },

  list: {
    padding: '0',
    '& > li': {
      margin: theme.spacing(3, 0),
      cursor: 'pointer',
      listStyle: 'none',
      fontSize: '14px',
      animation: 'all 0.3s ease',
      color: '#666',
      '&:hover': {
        color: '#f50057',
      },
    },
  },
}));

const FiltersByCategory = ({ onChange }) => {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            title: x.title,
          }))
        );
      } catch (error) {
        console.log('Fail to fetch category list', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.title);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>Collections</div>
        <ul className={classes.list}>
          {categoryList.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FiltersByCategory;
