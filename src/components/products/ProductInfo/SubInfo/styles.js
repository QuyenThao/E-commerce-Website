import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    '& > div': {
      display: 'flex',
      margin: theme.spacing(2, 0),
    },
  },

  text: {
    wordSpacing: '1px',
  },

  icon: {
    fontSize: '20px',
    marginRight: theme.spacing(1),
  },

  time: {
    textDecoration: 'underline',
    color: 'red',
  },

  day: {
    textDecoration: 'underline',
  },

  number: {
    padding: '2px 8px',
    background: '#000',
    color: '#fff',
  },

  money: {
    color: 'red',
  },
}));
