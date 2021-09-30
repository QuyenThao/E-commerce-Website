import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: '40vh',
  },

  content: {
    marginTop: theme.spacing(12),
  },

  title: {
    fontSize: '3.5rem',
  },

  subtitle: {
    fontSize: '2rem',
  },

  text: {
    fontSize: '1.2rem',
    color: '#666',
    marginTop: theme.spacing(3),
  },

  btn: {
    marginTop: theme.spacing(6),
    letterSpacing: '1.5px',
    padding: theme.spacing(1, 4),
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
}));
