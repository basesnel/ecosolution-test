import PropTypes from 'prop-types';

import css from './Text.module.css';

export default function Text({ children, variant = null }) {
  const variation = variant ? `${css[variant]}` : '';
  return <p className={`${css.text} ${variation}`}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
};
