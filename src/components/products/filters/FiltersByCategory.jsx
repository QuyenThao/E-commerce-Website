import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import categoryApi from '../../../api/categoryApi';

const useStyles = makeStyles((theme) => ({
  root: {},

  title: {
    textTransform: 'uppercase',
    fontSize: '14px',
  },

  list: {
    padding: '0',
  },

  item: {
    margin: theme.spacing(3, 0),
    cursor: 'pointer',
    listStyle: 'none',
    color: '#666',
    fontSize: '14px',
    animation: 'all 0.3s ease',
    '&:hover': {
      color: '#f50057',
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
        console.log(categoryList);
      } catch (error) {
        console.log('Fail to fetch category list', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
      console.log('click', category.id);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>Collections</div>
        <ul className={classes.list}>
          {categoryList.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={classes.item}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FiltersByCategory;
