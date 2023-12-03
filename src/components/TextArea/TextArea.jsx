import PropTypes from 'prop-types';

import css from './TextArea.module.css';

export default function TextArea(props) {
  const { disabled, name, label, placeholder, children } = props;

  return (
    <label className={css.field}>
      {label && (
        <span className={`${css['field-label']} ${css['no-require']}`}>
          {label}
        </span>
      )}
      <div className={css['wrap-input']}>
        <textarea
          className={css['field-input']}
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
}

TextArea.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.string,
};
