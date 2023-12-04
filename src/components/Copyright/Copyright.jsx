import PropTypes from 'prop-types';

import css from './Copyright.module.css';

export default function Copyright({ caption, variant = null }) {
  const variation = variant ? `${css[variant]}` : '';
  return <small className={`${css.copyright} ${variation}`}>{caption}</small>;
}

Copyright.propTypes = {
  caption: PropTypes.any.isRequired,
};
