import {
  Badge,
  Box,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
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
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Auth/components/Login';
import Register from '../Auth/components/Register';
import { logout } from '../Auth/userSlice';

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
  dropdownMenu: {
    marginTop: theme.spacing(5),
    paddingTop: '0',
    boxShadow: 'none',
  },
  dropdownMenuItem: {
    fontSize: '15px',
    color: '#666',
    // borderTop: '1px solid #eaeaea80',
    width: theme.spacing(20),
    '&:hover': {
      color: '#f50057',
    },
  },
}));

const HeaderContainer = () => {
  const classes = useStyles();

  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const dispatch = useDispatch();

  const MODE = {
    REGISTER: 'register',
    LOGIN: 'login',
  };

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenSignIn = async () => {
    await setOpen(true);
    await setMode(MODE.LOGIN);
    handleCloseMenu();
  };

  const handleOpenSignUp = async () => {
    await setOpen(true);
    await setMode(MODE.REGISTER);
    handleCloseMenu();
  };

  const handleLogoutClick = async () => {
    const action = logout();
    await dispatch(action);
    handleCloseMenu();
  };

  return (
    <>
      <Toolbar className={classes.headerContainer}>
        <IconButton className={classes.icon}>
          <Search style={{ fontSize: 30 }} />
        </IconButton>
        <IconButton className={classes.icon} onClick={handleUserClick}>
          <AccountCircleOutlined style={{ fontSize: 25 }} />
        </IconButton>
        <IconButton className={classes.icon}>
          <Badge badgeContent={2} color="secondary">
            <ShoppingCartOutlined style={{ fontSize: 25 }} />
          </Badge>
        </IconButton>
      </Toolbar>

      {!isLoggedIn && (
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          className={classes.dropdownMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={handleOpenSignIn}
            className={classes.dropdownMenuItem}
          >
            Sign In
          </MenuItem>
          <MenuItem
            onClick={handleOpenSignUp}
            className={classes.dropdownMenuItem}
          >
            Sign Up
          </MenuItem>
        </Menu>
      )}

      {isLoggedIn && (
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          className={classes.dropdownMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={handleCloseMenu}
            className={classes.dropdownMenuItem}
          >
            My account
          </MenuItem>
          <MenuItem
            onClick={handleLogoutClick}
            className={classes.dropdownMenuItem}
          >
            Logout
          </MenuItem>
        </Menu>
      )}

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
