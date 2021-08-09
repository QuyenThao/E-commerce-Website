import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../form-control/InputField';
import PasswordField from '../../../form-control/PasswordField';
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
    identifier: yup
      .string()
      .required('please enter your email')
      .email('Please enter a valid email.'),
    password: yup.string().required('Please anter your password'),
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
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
        <LinearProgress
          variant="buffer"
          className={classes.loading}
          color="secondary"
        />
      )}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField
                variant="outlined"
                fullWidth
                label="Email"
                name="identifier"
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
          </Grid>
          <Button
            disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
