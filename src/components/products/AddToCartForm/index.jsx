import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import QuantityField from '../../form-control/QuantityField';
import useStyles from './styles';

const AddToCartForm = ({ onSubmit }) => {
  const classes = useStyles();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Minimum value is 1')
      .typeError('Please enter a number'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.root}>
      <div className={classes.addToCart}>
        <QuantityField variant="outlined" name="quantity" form={form} />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={classes.btn}
        >
          Add to Cart
        </Button>
      </div>
      <div className={classes.buyNow}>
        <div className={classes.condition}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="I agree with terms and conditions"
                size="small"
                className={classes.checkbox}
              />
            }
            label="I agree with terms and conditions"
            className={classes.label}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={
            checked ? { opacity: 1 } : { opacity: 0.6, pointerEvents: 'none' }
          }
          className={classes.btn1}
        >
          Buy it now
        </Button>
      </div>
    </form>
  );
};

export default AddToCartForm;
