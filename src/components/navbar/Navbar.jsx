import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

import MegaMenu from './menu/MegaMenu';
import HeaderContainer from './HeaderContainer';

function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} evevation={0}>
      <Toolbar>
        <MegaMenu />
        <div className={classes.logo}>
          <Link to="/">
            <img
              src="https://cdn.shopify.com/s/files/1/2173/3027/t/123/assets/logo.svg?v=3643094164106701333"
              alt="logo"
              className={classes.logoBtn}
            />
          </Link>
        </div>
        <HeaderContainer />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
