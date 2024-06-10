import PropTypes from 'prop-types';

import css from './Input.module.css';

const Input = props => {
  const {
    disabled,
    type,
    name,
    value,
    label,
    placeholder,
    onChange,
    autocomplete,
  } = props;
  const { field, fieldLabel, fieldInput } = css;

  return (
    <label className={field}>
      {label && <span className={fieldLabel}>{label}</span>}
      <div>
        <input
          className={fieldInput}
          disabled={disabled}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={autocomplete}
        />
      </div>
    </label>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  autocomplete: PropTypes.string,
};

Input.defaultProps = {
  disabled: null,
  value: null,
  label: null,
  placeholder: null,
  onChange: null,
  autoComplete: null,
};

export default Input;
