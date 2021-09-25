import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    border: 'none',
  },

  img: {
    // width: '4.6em',
    height: '4.6em',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    '& > img': {
      maxWidth: '4.5em',
      // height: '4.6em',
      margin: '0 4px',
    },
  },

  badge: {
    '& > span': {
      padding: theme.spacing(0.9),
      background: 'rgba(114,114,114,0.9)',
      color: '#fff',
    },
  },

  name: {
    fontWeight: 500,
  },

  price: {
    fontWeight: 500,
    fontSize: '13px',
  },
}));
