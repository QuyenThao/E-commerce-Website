import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {},

  header: {
    paddingBottom: theme.spacing(4),
    borderBottom: '1px dotted #d0d0d0',
  },

  title: {
    fontWeight: 500,
    fontSize: '18px',
    letterSpacing: '.5px',
    marginBottom: theme.spacing(2),
  },

  reviews: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  content: {
    color: '#666',
    fontSize: '14px',
    marginBottom: theme.spacing(2),
  },

  btn: {
    color: '#fff',
    background: '#000',
    height: 'fit-content',
    padding: theme.spacing(1, 2),
    border: '1px solid #000',
    borderRadius: 0,
    transition: 'all .3s ease',
    '&:hover': {
      color: '#000',
      background: '#fff',
    },
  },
}));
