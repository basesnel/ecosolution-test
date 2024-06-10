import PropTypes from 'prop-types';

import css from './Copyright.module.css';

const Copyright = props => {
  const { caption, variant } = props;
  const { copyright } = css;

  const variation = variant ? `${css[variant]}` : '';
  return <small className={`${copyright} ${variation}`}>{caption}</small>;
};

Copyright.propTypes = {
  caption: PropTypes.any.isRequired,
  variant: PropTypes.string,
};

Copyright.defaultProps = {
  variant: null,
};

export default Copyright;
