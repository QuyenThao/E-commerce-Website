import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled, placeholder, size } = props;
  const { formState } = form;
  const hasError = formState.errors[name];
  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <TextField
            variant="outlined"
            fullWidth
            size={size}
            label={label}
            placeholder={placeholder}
            disabled={disabled}
            error={!!hasError}
            helperText={formState.errors[name]?.message}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
    </>
  );
}

export default InputField;
