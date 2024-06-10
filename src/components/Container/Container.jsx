import PropTypes from 'prop-types';

import css from './Container.module.css';

const Container = props => {
  const { children, variant } = props;
  const { container } = css;

  const variation = variant ? `${css[variant]}` : '';
  return (
    <div role="presentation" className={`${container} ${variation}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

Container.defaultProps = {
  variant: null,
};

export default Container;
