import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    margin: theme.spacing(12, 0, 5, 0),
    display: 'flex',
    listStyleType: 'none',
    textTransform: 'uppercase',
    fontSize: '14px',
    letterSpacing: '0.5px',
    padding: 0,
    paddingBottom: theme.spacing(2),
    width: '100%',
    borderBottom: '1px solid #ebebeb',
  },

  item: {
    marginRight: theme.spacing(6),

    '& > a': {
      color: '#959595',
      paddingBottom: theme.spacing(2),
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#000',
        textDecoration: 'none',
        borderBottom: '1px solid #000',
      },
    },

    '& > a.active': {
      color: '#000',
      textDecoration: 'none',
      borderBottom: '1px solid #000',
    },
  },
}));
