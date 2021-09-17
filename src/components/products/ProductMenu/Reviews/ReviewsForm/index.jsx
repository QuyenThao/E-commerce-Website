import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../form-control/InputField';
import TextareaField from '../../../../form-control/TextareaField';
import useStyles from './styles';

export default function RegisterForm({ onSubmit }) {
  const classes = useStyles();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your name')
      .min(2, 'Please enter at least two characters'),
    email: yup
      .string()
      .required('please enter your email')
      .email('Please enter a valid email.'),
    title: yup
      .string()
      .required('Please enter your review title')
      .min(2, 'Please enter at least two characters'),
  });
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      title: '',
      reviewBody: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {isSubmitting && <h5>Loading..</h5>}
      <div className={classes.paper}>
        <div className={classes.title}>Write A Review</div>
        <form
          className={classes.form}
          noValidate
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className={classes.input}>
            <span className={classes.name}>Name</span>
            <InputField
              fullWidth
              placeholder="Enter your name"
              name="name"
              form={form}
            />
          </div>
          <div className={classes.input}>
            <span className={classes.name}>Email</span>
            <InputField
              fullWidth
              placeholder="john.smith@example.com"
              name="email"
              form={form}
            />
          </div>
          <div className={classes.input}>
            <span className={classes.name}>Review Title</span>
            <InputField
              fullWidth
              placeholder="Give your review a title"
              name="title"
              form={form}
            />
          </div>
          <div className={classes.reviewBody}>
            <span className={classes.name}>Body of Review (1500) </span>
            <TextareaField
              variant="outlined"
              fullWidth
              placeholder="Write your comment here"
              name="reviewBody"
              minRows={8}
              form={form}
            />
          </div>

          <Button
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn}
          >
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
}
