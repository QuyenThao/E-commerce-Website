import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  delivery: {
    padding: theme.spacing(2, 25, 3, 4),
    background: '#fff',
  },
  item: {
    margin: theme.spacing(3, 0),
    fontSize: '14px',
    color: '#666',
    cursor: 'text',
    '& > ul': {
      paddingLeft: theme.spacing(3.5),
      '& > li': {
        margin: theme.spacing(1, 0),
      },
    },
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: 500,
    color: '#000',
  },
}));
