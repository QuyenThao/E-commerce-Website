import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    paddingBotttom: '2px',
    marginBottom: theme.spacing(5),
    color: '#000',
    textTransform: 'uppercase',
    transition: 'all .5s ease',
  },

  label: {
    display: 'flex',
    transition: 'all 0.3s ease',

    '& > div ': {
      cursor: 'pointer',
      '&:hover': {
        color: '#da324a',
      },
    },
  },

  open: {
    fontSize: '13px',
    paddingBotttom: '2px',
    marginBottom: theme.spacing(5),
    color: '#000',
    textTransform: 'uppercase',
    borderBottom: '1px solid #000',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#da324a',
      borderBottom: '1px solid #da324a',
    },
  },

  wrapped: {
    position: 'relative',
    zIndex: 2,
  },

  cover: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeIcon: {
    padding: theme.spacing(0.5),
    background: '#000',
    color: '#fff',
    zIndex: 3,
    position: 'absolute',
    right: theme.spacing(-2),
    top: theme.spacing(-2),
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      background: '#f13958',
    },
  },
}));
