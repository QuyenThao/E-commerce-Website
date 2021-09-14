import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    background: '#fff',
    padding: theme.spacing(5),
  },

  title: {
    fontWeight: 500,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  },

  input: {
    width: theme.spacing(50),
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(3),
    fontSize: '14px',
    border: '1px solid #000',
    '&:focus': {
      outline: 'none',
    },
  },

  btn: {
    width: 'fit-content',
    color: '#fff',
    background: '#000',
    padding: theme.spacing(1, 4),
    transition: 'all .3s ease',
    borderRadius: '0',
    fontWeight: '400',
    border: '1px solid #000',
    '&:hover': {
      background: '#000',
      opacity: 0.6,
    },
  },
}));
