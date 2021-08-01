import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    boxShadow: 'none',
    transition: '0.4s ease',
    '&:hover $cardImage $overlay': {
      opacity: '100%',
    },
    '&:hover $cardImage $overlay $addToCartBtn': {
      transform: 'translate(0, 0)',
    },
  },

  cardImage: {
    position: 'relative',
    paddingBottom: '40px',
  },

  media: {
    height: 'auto',
    maxWidth: '100%',
    paddingTop: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: '0',
    color: 'black',
    width: '100%',
    transition: '.2s ease-out',
    boxSizing: 'boder-box',
    overflow: 'hidden',
  },
  addToCartBtn: {
    width: '100%',
    backgroundColor: '#000',
    fontWeight: '400',
    borderRadius: '0',
    transform: 'translate(0, 100%)',
    transition: '.2s',
    '&:hover': {
      backgroundColor: '#3b3b3b',
    },
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  cardContent: {
    textAlign: 'center',
    justifyContent: 'space-between',
  },

  cardTitle: {
    color: '#000',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '400',
    transition: '0.2s ease',
    '&:hover': {
      color: '#f50057',
    },
  },

  cardPrice: {
    color: '#da324a',
    marginTop: '10px',
  },

  originalPrice: {
    color: '#999',
    textDecoration: 'line-through',
    marginRight: '10px',
  },
}));
