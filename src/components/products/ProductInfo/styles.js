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

  // btn: {
  //   background: '#000',
  //   color: '#fff',
  //   border: '1px solid #000',
  //   width: 'auto',
  //   paddingTop: theme.spacing(1.5),
  //   paddingBottom: theme.spacing(1.5),
  //   transition: 'all .5s ease',
  //   borderRadius: '0',
  //   fontWeight: '600',
  //   '&:hover': {
  //     color: '#000',
  //     background: '#fff',
  //     border: '1px solid #000',
  //   },
  // },
}));
