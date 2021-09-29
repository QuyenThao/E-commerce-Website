import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
const ShippingForm = ({ infomationData, nextStep, backStep }) => {
  const classes = useStyles();
  const { email, city, country, adress } = infomationData;
  return (
    <div>
      <div className={classes.root}>
        <TableContainer className={classes.adress}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className={classes.name}>
                  Contact
                </TableCell>
                <TableCell align="right">{email}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className={classes.name}>
                  Ship to
                </TableCell>
                <TableCell align="right">
                  {adress}, {city}, {country}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.shippingMethod}>
        <div className={classes.title}>Shipping Method</div>
        <div className={classes.choice}>
          <div className={classes.input}>
            <input
              type="radio"
              name="shipping"
              value="Standard Shipping"
              checked
              readOnly
              className={classes.radioBtn}
            />
            <label className={classes.label}>Standard Shipping</label>
          </div>
          <div className={classes.price}>$0.00</div>
        </div>
      </div>
      <div className={classes.buttons}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={nextStep}
          className={classes.submit}
        >
          Continue to payment
        </Button>
        <div onClick={backStep} className={classes.return}>
          Return to infomation
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
