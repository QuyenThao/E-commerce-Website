import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../form-control/InputField';
import PasswordField from '../../../form-control/PasswordField';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 8),
  },
  loading: {
    top: theme.spacing(0.5),
    left: 0,
    right: 0,
    position: 'absolute',
  },
}));

export default function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required('Please enter your first name')
      .min(2, 'Please enter at least two characters'),
    lastName: yup
      .string()
      .required('Please enter your last name')
      .min(2, 'Please enter at least two characters'),
    email: yup
      .string()
      .required('please enter your email')
      .email('Please enter a valid email.'),
    password: yup
      .string()
      .required('Please anter your password')
      .min(6, 'Please enter at least 6 characters.'),
    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password does not match.'),
  });
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {isSubmitting && (
        <LinearProgress className={classes.loading} color="secondary" />
      )}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
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
                label="First Name"
                name="firstName"
                form={form}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                variant="outlined"
                fullWidth
                label="Last Name"
                name="lastName"
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                variant="outlined"
                fullWidth
                label="Email"
                name="email"
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                form={form}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                variant="outlined"
                fullWidth
                name="retypePassword"
                label="Retype Password"
                form={form}
              />
            </Grid>
          </Grid>
          <Button
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {/* <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}
