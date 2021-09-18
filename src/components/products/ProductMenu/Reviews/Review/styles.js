import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },

  rating: {
    margin: theme.spacing(2, 0),
  },

  name: {
    fontSize: '14px',
    color: '#000',
    fontWeight: 500,
  },

  email: {
    fontSize: '12px',
  },

  title: {
    color: '#000',
    fontWeight: 500,
    marginBottom: theme.spacing(1),
  },

  comment: {
    color: '#000',
  },
}));
