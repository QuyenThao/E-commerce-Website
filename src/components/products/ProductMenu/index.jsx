import { Link } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';

const ProductMenu = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <ul className={classes.root}>
      <li className={classes.item}>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>

      <li className={classes.item}>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Reviews
        </Link>
      </li>

      <li className={classes.item}>
        <Link component={NavLink} to={`${url}/custom-tab1`} exact>
          Custom Tab 1
        </Link>
      </li>

      <li className={classes.item}>
        <Link component={NavLink} to={`${url}/custom-tab2`} exact>
          Custom Tab 2
        </Link>
      </li>
    </ul>
  );
};

export default ProductMenu;
