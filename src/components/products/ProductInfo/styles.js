import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  info: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  label: {
    display: 'flex',
  },

  delivery: {
    paddingLeft: theme.spacing(3),
  },

  addToCart: {
    marginBottom: theme.spacing(3),
  },
}));
