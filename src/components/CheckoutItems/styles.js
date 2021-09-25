import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '60%',
    borderRight: '1px solid #eaeaea',
    paddingTop: theme.spacing(6),
    paddingRight: theme.spacing(4),
  },

  title: {
    fontSize: '26px',
    color: '#333',
    textDecoration: 'none',
  },
}));
