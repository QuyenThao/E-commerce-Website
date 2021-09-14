import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  gridContainer: {
    flexWrap: 'nowrap',
  },
  left: {
    flex: '1 1 0',
  },

  right: {
    width: theme.spacing(36),
  },
  title: {
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: '400',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
  filters: {
    margin: '220px 0 0 16px',
  },
  filtersViewer: {
    margin: '22px 0 0 32px',
  },
}));
