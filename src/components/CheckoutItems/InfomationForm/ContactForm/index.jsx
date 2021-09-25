import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import user from '../../../../image/user.png';
import Login from '../../../Auth/components/Login';
import { logout } from '../../../Auth/userSlice';
import InputField from '../../../form-control/InputField';
import useStyles from './styles';

const ContactForm = ({ form }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenSignIn = async () => {
    await setOpen(true);
    handleCloseMenu();
  };

  const handleLogoutClick = async () => {
    const action = logout();
    await dispatch(action);
    handleClose();
  };
  return (
    <div>
      {!isLoggedIn ? (
        <div className={classes.contact}>
          <div className={classes.wrap}>
            <div className={classes.title}>Contact Infomation</div>
            <p>
              Already have an account?
              <span className={classes.login} onClick={handleOpenSignIn}>
                Sign in
              </span>
            </p>
          </div>
          <InputField
            variant="outlined"
            fullWidth
            size="small"
            label="Email"
            name="email"
            form={form}
          />
        </div>
      ) : (
        <div className={classes.contact}>
          <div className={classes.wrap}>
            <div className={classes.title}>Contact Infomation</div>
          </div>
          <div className={classes.user}>
            <div className={classes.avatar}>
              <img src={user} alt="avatar" />
            </div>
            <div className={classes.userInfo}>
              <p className={classes.userName}>{loggedInUser.username}</p>
              <span className={classes.logout} onClick={handleLogoutClick}>
                Log out
              </span>
            </div>
          </div>
        </div>
      )}
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="Keep me up to date on news and offers"
            size="small"
            color="default"
            className={classes.checkbox}
          />
        }
        label="Keep me up to date on news and offers"
        className={classes.label}
      />

      <Dialog
        disableEscapeKeyDown
        open={open}
        aria-labelledby="form-dialog-title"
      >
        <Button>
          <Close className={classes.closeIcon} onClick={handleClose} />
        </Button>
        <DialogContent>
          {open === true && <Login closeDialog={handleClose} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;
