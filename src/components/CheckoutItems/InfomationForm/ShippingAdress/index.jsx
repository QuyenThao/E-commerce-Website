import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../../form-control/InputField';
import SelectField from '../../../form-control/SelectField';
import useStyles from './styles';

export default function ShippingAdress({ onSubmit, form }) {
  const classes = useStyles();

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      <div className={classes.title}>Shipping Adress</div>
      <form
        className={classes.form}
        noValidate
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              variant="outlined"
              fullWidth
              size="small"
              label="First Name"
              name="firstName"
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              variant="outlined"
              fullWidth
              size="small"
              label="Last Name"
              name="lastName"
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              variant="outlined"
              fullWidth
              size="small"
              label="Adress"
              name="adress"
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              variant="outlined"
              fullWidth
              size="small"
              label="Apartment, suite, etc(Optional)"
              name="apartment"
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              variant="outlined"
              fullWidth
              size="small"
              label="City"
              name="city"
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              variant="outlined"
              fullWidth
              size="small"
              label="Country"
              name="country"
              form={form}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              variant="outlined"
              fullWidth
              size="small"
              label="Postal code"
              name="postalCode"
              form={form}
            />
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Button
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Continue to shipping
          </Button>
          <Link to="/cart" className={classes.return}>
            Return to cart
          </Link>
        </div>
      </form>
    </div>
  );
}
