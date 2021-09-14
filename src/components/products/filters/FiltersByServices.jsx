import { Box, Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    borderBottom: '1px solid #ebebeb',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '14px',
  },

  filter: {
    margin: theme.spacing(0),
  },

  list: {
    padding: '0',
    '& > li': {
      color: '#000',
      listStyleType: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#f13958',
      },
    },
  },
  label: {
    '& > span': {
      fontSize: '14px',
    },
  },
}));

const FiltersByServices = ({ filters, onChange }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>Services</div>

      <Box className={classes.filter}>
        <ul className={classes.list}>
          {[
            { id: 1, name: 'isPromotion', label: 'Promotion' },
            { id: 2, name: 'isFreeShip', label: 'FREE Shipping' },
          ].map((service) => (
            <li key={service.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={JSON.parse(filters[service.name] || false)}
                    onChange={handleChange}
                    name={service.name}
                    color="secondary"
                    className={classes.checkbox}
                  />
                }
                label={service.label}
                className={classes.label}
              />
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
};

export default FiltersByServices;
