import {
  Box,
  Button,
  InputAdornment,
  makeStyles,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: '1px solid #ebebeb',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '14px',
  },

  filter: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },

  dash: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 1),
  },
  input: {
    width: theme.spacing(11),
  },
  button: {
    marginTop: theme.spacing(1.5),
    borderColor: '#000',
    animation: 'all 0.3s ease',
    '&:hover': {
      background: '#000',
      color: '#fff',
    },
  },
}));

const FiltersByPrice = ({ onChange }) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>Price</div>
      <Box className={classes.filter}>
        <TextField
          className={classes.input}
          name="salePrice_gte"
          value={values.salePrice_gte}
          variant="outlined"
          size="small"
          color="secondary"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={handleChange}
        />
        <span className={classes.dash}>--</span>
        <TextField
          className={classes.input}
          name="salePrice_lte"
          value={values.salePrice_lte}
          variant="outlined"
          size="small"
          color="secondary"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          onChange={handleChange}
        />
      </Box>
      <Button
        className={classes.button}
        variant="outlined"
        onClick={handleSubmit}
      >
        GO
      </Button>
    </div>
  );
};

export default FiltersByPrice;
