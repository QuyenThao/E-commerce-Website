import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'block',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
    borderBottom: '1px dotted #d0d0d0',
  },

  title: {
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: '.5px',
    marginBottom: theme.spacing(2),
  },

  input: {
    display: 'flex',
    flexDirection: 'column',

    '& > div': {
      marginBottom: '10px',
    },

    '& > div > div >input': {
      fontSize: '14px',
      color: '#000',
      padding: '8px 10px',
      border: '1px solid #000',
    },
    '& > div > div.MuiOutlinedInput-root': {
      borderRadius: 0,
    },
  },

  name: {
    color: '#666',
    fontSize: '13px',
    marginBottom: '10px',
  },

  reviewBody: {
    display: 'flex',
    flexDirection: 'column',

    '& > textarea': {
      fontSize: '14px',
      color: '#000',
      padding: '8px 10px',
      border: '1px solid #000',
      resize: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
  },

  rating: {
    display: 'flex',
    flexDirection: 'column',
    '& > span': {
      marginBottom: theme.spacing(2),
    },
  },

  btn: {
    width: 'fit-content',
    color: '#fff',
    background: '#000',
    marginTop: theme.spacing(2.5),
    padding: theme.spacing(1, 4),
    transition: 'all .3s ease',
    borderRadius: '0',
    border: '1px solid #000',
    '&:hover': {
      background: '#fff',
      color: '#000',
    },
  },
}));
