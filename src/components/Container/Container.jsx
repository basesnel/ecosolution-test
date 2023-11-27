import PropTypes from 'prop-types';

import css from './Container.module.css';

export default function Container({ children, variant = null }) {
  const variation = variant ? `${css[variant]}` : '';
  return (
    <div role="presentation" className={`${css.container} ${variation}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
