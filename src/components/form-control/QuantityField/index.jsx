import { Box, IconButton } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddRounded, RemoveRounded } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import useStyles from './styles';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const classes = useStyles();
  const { form, name } = props;
  const { formState, setValue } = form;
  const hasError = formState.errors[name];

  return (
    <>
      <FormControl
        error={!!hasError}
        variant="outlined"
        size="small"
        className={classes.root}
      >
        <Controller
          name={name}
          control={form.control}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Box className={classes.quantity}>
              <IconButton
                className={classes.btn}
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                  )
                }
              >
                <RemoveRounded className={classes.icon} />
              </IconButton>
              <OutlinedInput
                id={name}
                type="number"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={classes.input}
              />
              <IconButton
                className={classes.btn}
                onClick={() =>
                  setValue(
                    name,
                    Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                  )
                }
              >
                <AddRounded className={classes.icon} />
              </IconButton>
            </Box>
          )}
        />

        <FormHelperText error={!!hasError}>
          {formState.errors[name]?.message}
        </FormHelperText>
      </FormControl>
    </>
  );
}

export default PasswordField;
