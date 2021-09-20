import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    fontSize: '14px',
  },

  turnBack: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .4s ease',
    '&:hover': {
      color: '#da324a',
    },
  },

  right: {
    display: 'flex',
    '& > div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all .4s ease',
      '&:hover': {
        color: '#da324a',
      },
    },
  },

  clear: {
    marginRight: theme.spacing(8),
  },

  text: {
    paddingLeft: theme.spacing(1),
  },
}));
