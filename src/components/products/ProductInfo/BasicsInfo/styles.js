import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  title: {
    fontSize: '30px',
    marginBottom: '20px',
    fontWeight: '500',
  },

  inventory: {
    '& > span': {
      fontSize: '11px',
      color: '#fff',
      padding: '6px',
      background: '#81bf30',
    },
  },

  meta: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    margin: theme.spacing(2.5, 0),
  },

  reviews: {
    color: '#959595',
    display: 'flex',
    fontSize: '14px',
    '& > span': {
      marginLeft: '8px',
    },
  },

  star: {
    fontSize: '18px',
  },

  totalSold: {
    fontSize: '16px',
    color: '#c00',
    fontWeight: '600',
  },

  fireIcon: {
    fontSize: '16px',
  },

  vendor: {
    color: '#666',
  },

  brand: {
    color: '#000',
    marginLeft: theme.spacing(2),
  },

  sku: {
    color: '#666',
  },

  prices: {
    display: 'block',
    color: '#000',
    fontSize: '24px',
    fontWeight: '700',
    margin: theme.spacing(3, 0),
  },

  originalPrice: {
    color: '#959595',
    fontSize: '18px',
    textDecoration: 'line-through',
    marginRight: '14px',
  },
}));
