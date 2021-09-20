import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 100,
  },

  wrapper: {
    padding: theme.spacing(1, 1.1),
    background: 'rgba(0,0,0,0.8)',
    borderRadius: '8px',
  },

  loading: {
    color: '#fff',
    height: '32px !important',
    width: '32px !important',
  },
}));
