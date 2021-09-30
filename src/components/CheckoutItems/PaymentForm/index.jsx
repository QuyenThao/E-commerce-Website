import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../Auth/selectors';
import useStyles from './styles';

const Form = ({ infomationData, backStep, nextStep, onCaptureCheckout }) => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const items = useSelector(cartItemsSelector);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: items,
        customer: {
          firstName: infomationData.firstName,
          lastName: infomationData.lastName,
          email: infomationData.email,
        },
        shipping: {
          name: 'Standard Shipping',
          adress: infomationData.adress,
          town_city: infomationData.city,
          country: infomationData.country,
        },
        fulfillment: { shipping_method: 'Standard Shipping' },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(orderData);

      nextStep();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
        className={classes.card}
      />
      <br /> <br />
      <div className={classes.buttons}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disable={!stripe}
          className={classes.submit}
        >
          Submit Payment
        </Button>
        <div onClick={backStep} className={classes.return}>
          Return to infomation
        </div>
      </div>
    </form>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  infomationData,
  backStep,
  nextStep,
  onCaptureCheckout,
}) => {
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
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className={classes.name}>
                  Method
                </TableCell>
                <TableCell align="right">Standard Shipping . $0.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.shippingMethod}>
        <div className={classes.title}>Payment</div>
        <div className={classes.payment}>
          <Elements stripe={stripePromise}>
            <Form
              infomationData={infomationData}
              backStep={backStep}
              nextStep={nextStep}
              onCaptureCheckout={onCaptureCheckout}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
