import PropTypes from 'prop-types';

import css from './Input.module.css';

export default function Input(props) {
  const { disabled, type, name, value, label, placeholder, onChange } = props;

  return (
    <label className={css.field}>
      {label && <span className={css['field-label']}>{label}</span>}
      <div className={css['wrap-input']}>
        <input
          className={css['field-input']}
          disabled={disabled}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </label>
  );
}

Input.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
