import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  appBar: {
    background: '#fff',
    display: 'flex',
    boxShadow: '0px 1px #d4dce063',
    position: 'fixed',
    marginBottom: '65px',
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
