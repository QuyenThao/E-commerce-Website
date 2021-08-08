import {
  Box,
  Badge,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {
  AccountCircleOutlined,
  Close,
  Search,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import Register from '../Auth/components/Register';
import Login from '../Auth/components/Login';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    position: 'absolute',
    right: '0',
    width: 'auto',
  },
  icon: {
    color: '#2f2626',
  },
  closeIcon: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.grey[600],
  },
  btn: {
    color: '#3f51b5',
  },
}));

const HeaderContainer = () => {
  const classes = useStyles();

  const MODE = {
    REGISTER: 'register',
    LOGIN: 'login',
  };

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

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
        <Button>
          <Close className={classes.closeIcon} onClick={handleClose} />
        </Button>

        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button
                  className={classes.btn}
                  variant="body2"
                  onClick={() => setMode(MODE.LOGIN)}
                >
                  Already have an account? Sign in
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button
                  className={classes.btn}
                  onClick={() => setMode(MODE.REGISTER)}
                >
                  Dont have an account? Sign Up
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeaderContainer;
