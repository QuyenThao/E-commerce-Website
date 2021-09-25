import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  title: {
    color: '#333',
    fontSize: '17px',
    fontWeight: 400,
  },

  contact: {
    color: '#545454',
    fontSize: '14px',
    margin: theme.spacing(4, 0, 0),
  },

  login: {
    color: '#197bbd',
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
  },

  logout: {
    color: '#197bbd',
    cursor: 'pointer',
  },

  user: {
    display: 'flex',
    margin: theme.spacing(3, 0, 1),
  },

  avatar: {
    width: '50px',
    height: '50px',
    overflow: 'hidden',
    borderRadius: '8px',
    background: '#d8d8d8',
    backgroundSize: 'cover',
    marginRight: theme.spacing(1.5),
    '& > img': {
      height: '50px',
      width: '50px',
    },
  },

  userName: {
    margin: '7px 0 0',
  },

  label: {
    '& > span': {
      color: '#666',
      fontSize: '14px',
    },
  },

  closeIcon: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: theme.palette.grey[600],
  },

  submit: {
    width: 'fit-content',
    textTransform: 'capitalize',
    background: '#197bbd',
    borderRadius: '8px',
    padding: '1em 1.2em',
    marginRight: theme.spacing(3),
    fontSize: '13px',
    transition: 'all .4s ease',
    '&:hover': {
      background: '#135e90',
    },
  },
}));
