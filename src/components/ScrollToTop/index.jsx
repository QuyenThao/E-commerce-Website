import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { useWindowScroll } from 'react-use';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  scrollToTop: {
    position: 'fixed',
    bottom: theme.spacing(6),
    right: '4%',
    height: '32px',
    width: '32px',
    borderRadius: '100%',
    background: 'transparent',
    color: '#1a1a1f',
    border: '2px solid #000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1',
    transition: 'all .5s ease',
    '&:hover': {
      background: '#000',
      color: '#fff',
    },
  },
}));

const ScrollToTop = () => {
  const classes = useStyles();
  const { y: pageYOffSet } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffSet > 200) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffSet]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) {
    return false;
  }

  return (
    <div className={classes.scrollToTop} onClick={scrollToTop}>
      <KeyboardArrowUp className={classes.arrowUpIcon} />
    </div>
  );
};

export default ScrollToTop;
