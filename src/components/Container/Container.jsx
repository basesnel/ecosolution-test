import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Container = props => {
  const { children, variant } = props;

  const variation = variant ? `${styles[variant]}` : '';
  return (
    <div role="presentation" className={`${styles.container} ${variation}`}>
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
