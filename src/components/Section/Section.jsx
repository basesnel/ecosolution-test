import PropTypes from 'prop-types';

import css from './Section.module.css';

export default function Section({ children, part = null }) {
  const variation = part ? `${css[part]}` : '';
  return (
    <section className={`${css.section} ${variation}`}>{children}</section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  part: PropTypes.string,
};
