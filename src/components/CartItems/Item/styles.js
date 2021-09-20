import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },

  link: {
    textDecoration: 'none',
    color: '#000',
    transition: 'all .2s ease',
    '&:hover': {
      color: '#da324a',
    },
  },

  qty: {
    width: theme.spacing(4),
    textAlign: 'center',
    padding: theme.spacing(1),
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },

  title: {
    fontWeight: 500,
  },

  thumbnail: {
    height: '160px',
  },
}));
