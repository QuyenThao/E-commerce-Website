import {
  Badge,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {
  AccountCircleOutlined,
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import Register from '../Auth/components/Register';

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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Toolbar className={classes.headerContainer}>
        <IconButton className={classes.icon}>
          <Search style={{ fontSize: 30 }} />
        </IconButton>
        <IconButton className={classes.icon} onClick={handleClickOpen}>
          <AccountCircleOutlined style={{ fontSize: 25 }} />
        </IconButton>
        <IconButton className={classes.icon}>
          <Badge badgeContent={2} color="secondary">
            <ShoppingCartOutlined style={{ fontSize: 25 }} />
          </Badge>
        </IconButton>
      </Toolbar>

      <Dialog
        disableEscapeKeyDown
        open={open}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HeaderContainer;
