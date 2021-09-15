import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  addToCart: {
    display: 'flex',
    width: '100%',
  },

  btn: {
    letterSpacing: '1.5px',
    paddingTop: '9px',
    paddingBottom: '9px',
    flex: '1 1 auto',
    background: '#000',
    color: '#fff',
    border: '1px solid #000',
    borderRadius: 0,
    boxShadow: 'none',
    transition: 'all .5s ease',
    '&:hover': {
      background: '#fff',
      color: '#000',
    },
  },

  btn1: {
    letterSpacing: '1.5px',
    paddingTop: '9px',
    paddingBottom: '9px',
    background: '#fdb816',
    color: '#fff',
    borderRadius: 0,
    boxShadow: 'none',
    '&:hover': {
      background: '#fdb816',
      boxShadow: 'none',
    },
  },

  condition: {
    margin: theme.spacing(1.5, 0),
  },

  checkbox: {
    background: 'transparent',
    color: '#d7d7d7',
  },

  label: {
    color: '#959595',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#666',
    },
  },
}));
