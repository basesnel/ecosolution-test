import PropTypes from 'prop-types';

import css from './TextArea.module.css';

const TextArea = props => {
  const { disabled, name, label, placeholder, onChange, message } = props;
  const { field, fieldLabel, fieldTextarea, noRequire } = css;

  return (
    <label className={field}>
      {label && <span className={`${fieldLabel} ${noRequire}`}>{label}</span>}
      <div>
        <textarea
          className={fieldTextarea}
          disabled={disabled}
          name={name}
          value={message}
          placeholder={placeholder}
          onChange={onChange}
          rows={5}
        />
      </div>
    </label>
  );
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  message: PropTypes.string,
};

TextArea.defaultProps = {
  disabled: null,
  name: null,
  label: null,
  placeholder: null,
  onChange: null,
  message: null,
};

export default TextArea;
