import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import ContactForm from './ContactForm';
import ShippingAdress from './ShippingAdress';
import useStyles from './styles';

const InfomationForm = ({ next }) => {
  const classes = useStyles();
  const loggedInUser = useSelector((state) => state.user.current);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Enter your email')
      .email('Please enter a valid email.'),
    firstName: yup
      .string()
      .required('Enter your first name')
      .min(2, 'Enter at least two characters'),
    lastName: yup
      .string()
      .required('Enter your last name')
      .min(2, 'Enter at least two characters'),
    adress: yup
      .string()
      .required('Enter an adress')
      .min(2, 'Enter a valid Adress.'),
    city: yup
      .string()
      .required('Enter a city')
      .min(2, 'Enter at least 2 characters'),
  });
  const form = useForm({
    defaultValues: {
      email: loggedInUser.username || '',
      firstName: '',
      lastName: '',
      adress: '',
      apartment: '',
      city: '',
      country: '',
      postalCode: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (next) next(values);
  };

  return (
    <div className={classes.root}>
      <ContactForm onSubmit={handleSubmit} form={form} />
      <ShippingAdress onSubmit={handleSubmit} form={form} />
    </div>
  );
};

export default InfomationForm;
