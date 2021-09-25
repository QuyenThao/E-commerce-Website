import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    color: '#000',
    width: '40%',
    height: '100%',
    padding: '48px 0 64px 40px',
    background: '#fafafa',
  },

  row: {
    '& > td': {
      border: 'none',
      padding: theme.spacing(1, 2, 0),
      fontSize: '13px',
      fontWeight: 500,
    },
  },

  tax: {
    '& > td': {
      padding: theme.spacing(1, 2, 2.5),
      fontSize: '13px',
      fontWeight: 500,
    },
  },

  subtotal: {
    '& > td': {
      padding: theme.spacing(2.5, 2, 0),
    },
  },

  title: {
    color: '#535353',
    fontSize: '14px !important',
    fontWeight: '400 !important',
  },

  shipping: {
    color: '#717171',
    fontSize: '12px !important',
    fontWeight: '400 !important',
  },

  total: {
    fontSize: '16px !important',
    fontWeight: '400 !important',
  },

  payment: {
    fontSize: '25px !important',
    color: '#323232',
    fontWeight: '400 !important',
  },

  currency: {
    color: '#717171',
    fontSize: '12px',
    fontWeight: 400,
    paddingRight: theme.spacing(2),
  },
}));
