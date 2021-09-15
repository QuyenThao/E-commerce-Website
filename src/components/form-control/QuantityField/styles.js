import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    background: '#f7f8fa',
    marginRight: theme.spacing(3),
  },

  input: {
    width: '150px',
    padding: 0,
    marginLeft: theme.spacing(1),
    '& > fieldset': {
      border: 'none',
    },
  },

  quantity: {
    display: 'flex',
  },

  btn: {
    padding: theme.spacing(0, 0.8),
    '&:hover': {
      background: 'transparent',
    },
  },

  icon: {
    padding: 0,
    fontSize: '20px',
    color: '#d8d8d8',
    transition: 'all .2s ease',
    '&:hover': {
      color: '#000',
      padding: 0,
    },
  },
}));
