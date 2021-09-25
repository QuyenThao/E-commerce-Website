import PropTypes from 'prop-types';
import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { Controller } from 'react-hook-form';
import useStyles from './styles';

SelectField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function SelectField(props) {
  const { form, name } = props;
  const classes = useStyles();
  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <CountryDropdown
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            className={classes.select}
          />
        )}
      />
    </>
  );
}

export default SelectField;
