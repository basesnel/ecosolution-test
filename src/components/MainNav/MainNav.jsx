import PropTypes from 'prop-types';

import css from './MainNav.module.css';

const MainNav = props => {
  const { children } = props;
  const { mainNav } = css;

  return <nav className={mainNav}>{children}</nav>;
}

MainNav.propTypes = {
  children: PropTypes.any.isRequired,
};

export default MainNav;