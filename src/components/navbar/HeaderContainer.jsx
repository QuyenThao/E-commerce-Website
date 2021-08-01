import { Badge, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import {
  AccountCircleOutlined,
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    position: 'absolute',
    right: '0',
    width: 'auto',
  },
  icon: {
    color: '#2f2626',
  },
}));

const HeaderContainer = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.headerContainer}>
      <IconButton className={classes.icon}>
        <Search style={{ fontSize: 30 }} />
      </IconButton>
      <IconButton className={classes.icon}>
        <AccountCircleOutlined style={{ fontSize: 25 }} />
      </IconButton>
      <IconButton className={classes.icon}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCartOutlined style={{ fontSize: 25 }} />
        </Badge>
      </IconButton>
    </Toolbar>
  );
};

export default HeaderContainer;
