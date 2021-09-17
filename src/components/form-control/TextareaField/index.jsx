import { TextareaAutosize } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

TextareaField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function TextareaField(props) {
  const { form, name, label, disabled, placeholder, minRows } = props;

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <TextareaAutosize
            variant="outlined"
            fullWidth
            label={label}
            placeholder={placeholder}
            minRows={minRows}
            disabled={disabled}
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

export default TextareaField;
