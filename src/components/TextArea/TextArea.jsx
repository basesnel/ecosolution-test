import PropTypes from 'prop-types';

import css from './TextArea.module.css';

const TextArea = props => {
  const { disabled, name, label, placeholder, children } = props;
  const { field, fieldLabel, fieldTextarea, noRequire } = css;

  return (
    <label className={field}>
      {label && <span className={`${fieldLabel} ${noRequire}`}>{label}</span>}
      <div>
        <textarea
          className={fieldTextarea}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          rows={5}
        >
          {children}
        </textarea>
      </div>
    </label>
  );
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.string,
};

TextArea.defaultProps = {
  disabled: null,
  name: null,
  label: null,
  placeholder: null,
  children: null,
};

export default TextArea;
