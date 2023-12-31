import PropTypes from 'prop-types';

import css from './MainNav.module.css';

export default function MainNav({ children }) {
  return <nav className={css['main-nav']}>{children}</nav>;
}

MainNav.propTypes = {
  children: PropTypes.any.isRequired,
};
