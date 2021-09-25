import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },

  title: {
    color: '#333',
    fontSize: '17px',
    fontWeight: 400,
  },

  form: {
    marginTop: theme.spacing(3),
  },

  buttons: {
    display: 'flex',
    marginTop: theme.spacing(3),
    alignItems: 'center',
  },

  submit: {
    width: 'fit-content',
    textTransform: 'capitalize',
    background: '#197bbd',
    borderRadius: '8px',
    padding: '1.4em 1.7em',
    marginRight: theme.spacing(3),
    fontSize: '13px',
    transition: 'all .4s ease',
    '&:hover': {
      background: '#135e90',
    },
  },

  return: {
    color: '#197bbd',
    fontSize: '14px',
    textDecoration: 'none',
  },
}));
