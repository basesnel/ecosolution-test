import PropTypes from 'prop-types';

import css from './FitContent.module.css';

export default function FitContent({ children, variant = null }) {
  const variation = variant ? `${css[variant]}` : '';
  return (
    <div role="presentation" className={`${css['fit-content']} ${variation}`}>
      {children}
    </div>
  );
}

FitContent.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
