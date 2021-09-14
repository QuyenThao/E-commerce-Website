import React from 'react';
import useStyles from './styles';
import { useState } from 'react';
import { Close } from '@material-ui/icons';

const Guides = ({ name, children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.guide}>
      <div className={classes.open} onClick={handleClick}>
        {name}
      </div>

      <div className={classes.inner}>
        {open ? (
          <label className={classes.cover}>
            <div className={classes.wrapped}>
              <Close className={classes.closeIcon} onClick={handleClose} />
              <div>{children}</div>
            </div>
          </label>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Guides;
