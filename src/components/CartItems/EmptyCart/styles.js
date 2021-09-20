import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: theme.spacing(6),
  },

  cart: {
    fontSize: '180px',
    color: '#ebecee',
  },

  title: {
    fontSize: '36px',
    fontWeight: 500,
    textTransform: 'uppercase',
    margin: theme.spacing(1, 0),
  },

  text: {
    color: '#666',
    fontSize: '14px',
    marginBottom: theme.spacing(5),
  },

  btn: {
    padding: theme.spacing(1.3, 2.2),
    border: '1px solid #000',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#000',
    fontSize: '14px',
    fontWeight: 400,
    transition: 'all .5s ease',
    '&:hover': {
      background: '#000',
      color: '#fff !important',
    },
  },
}));
