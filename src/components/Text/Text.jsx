import PropTypes from 'prop-types';

import css from './Text.module.css';

const Text = props => {
  const { children, variant } = props;
  const { text } = css;

  const variation = variant ? `${css[variant]}` : '';
  return <p className={`${text} ${variation}`}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.string,
};

Text.defaultProps = {
  variant: null,
};

export default Text;
