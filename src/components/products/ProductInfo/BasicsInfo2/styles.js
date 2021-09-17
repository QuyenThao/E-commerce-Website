import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0),
    fontSize: '14px',
    color: '#666',
    '& > div': {
      display: 'flex',
      margin: theme.spacing(1.5, 0),
    },
  },

  item: {
    listStyleType: 'none',
    marginLeft: '6px',
    '& > a': {
      color: '#000',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all .2s ease',
    },

    '& > a:hover': {
      textDecoration: 'underline',
    },
  },

  icon: {
    color: '#000',
    fontSize: '18px',
    marginLeft: '12px',
    transition: 'all .2s ease',
    '&:hover': {
      opacity: 0.6,
    },
  },
}));
