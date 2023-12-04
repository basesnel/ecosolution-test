import PropTypes from 'prop-types';

import css from './FooterComponent.module.css';

export default function FooterComponent({ children }) {
  return <footer className={css.footer}>{children}</footer>;
}

FooterComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
