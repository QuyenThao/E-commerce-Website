import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0),
  },

  adress: {
    border: '1px solid rgba(224, 224, 224, 1)',
    borderRadius: '8px',
  },

  choice: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(3, 0),
    padding: theme.spacing(2, 1),
    border: '1px solid rgba(224,224,224,1)',
    borderRadius: '8px',
    cursor: 'pointer',
  },

  title: {
    color: '#333',
    fontSize: '17px',
    fontWeight: 400,
  },

  name: {
    color: '#545454',
  },

  label: {
    color: '#545454',
    fontSize: '14px',
  },

  radioBtn: {
    marginRight: theme.spacing(1),
  },

  price: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#333',
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
    cursor: 'pointer',
  },
}));
