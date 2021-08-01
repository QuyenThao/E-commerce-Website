import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  appBar: {
    background: 'none',
    display: 'flex',
    boxShadow: '0px 1px #d4dce063',
  },
  logo: {
    left: '46%',
    position: 'relative',
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
  },
  logoBtn: {
    height: '30px',
    width: 'auto',
  },
}));
