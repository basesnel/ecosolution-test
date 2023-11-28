import PropTypes from 'prop-types';

import css from './Text.module.css';

export default function Text({ children }) {
  return <p className={css.text}>{children}</p>;
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
};
