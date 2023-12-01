import PropTypes from 'prop-types';

import css from './Section.module.css';

export default function Section({ children, variant = null }) {
  const variation = variant ? `${css[variant]}` : '';
  return (
    <section className={`${css.section} ${variation}`}>{children}</section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
