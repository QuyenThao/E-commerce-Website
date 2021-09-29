import {
  Button,
  CircularProgress,
  Divider,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfomationForm from './InfomationForm';
import PaymentForm from './PaymentForm';
import ShippingForm from './ShippingForm';
import useStyles from './styles';
import Loading from '../Loading';

const steps = ['Infomation', 'Shipping', 'Payment'];

const CheckoutItems = ({ order, onCaptureCheckout, error }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [infomationData, setInfomationData] = useState({});

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = async (data) => {
    await setInfomationData(data);
    nextStep();
  };

  const Confimation = () =>
    order.customer ? (
      <>
        <div className={classes.title1}>
          Thank you for your purchase, {order.customer.firstName}{' '}
          {order.customer.lastName}
        </div>
        <br />
        <div className={classes.buttons}>
          <Link to="/products" className={classes.submit}>
            Continue Shopping
          </Link>
          <Link to="/" className={classes.return}>
            Back to Home
          </Link>
        </div>
      </>
    ) : (
      <div>
        <Loading />
      </div>
    );

  if (error) {
    <>
      <div className={classes.title}>Error: {error}</div>
      <br />
      <div className={classes.buttons}>
        <Link to="/products" className={classes.submit}>
          Continue Shopping
        </Link>
        <Link to="/" className={classes.return}>
          Back to Home
        </Link>
      </div>
    </>;
  }

  const Form = () => {
    if (activeStep === 0) return <InfomationForm next={next} />;
    if (activeStep === 1)
      return (
        <ShippingForm
          infomationData={infomationData}
          nextStep={nextStep}
          backStep={backStep}
        />
      );
    if (activeStep === 2)
      return (
        <PaymentForm
          infomationData={infomationData}
          backStep={backStep}
          nextStep={nextStep}
          onCaptureCheckout={onCaptureCheckout}
        />
      );
  };

  return (
    <div className={classes.root}>
      <Link to="/" className={classes.title}>
        cleversoft-kodo
      </Link>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.stepper}
      >
        {steps.map((step) => (
          <Step key={step} className={classes.stepper}>
            <StepLabel className={classes.stepLabel}>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? <Confimation /> : <Form />}
    </div>
  );
};

export default CheckoutItems;
