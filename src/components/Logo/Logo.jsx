import PropTypes from 'prop-types';

import { ReactComponent as EcosolutionLogo } from 'assets/images/logo.svg';

import css from './Logo.module.css';

export default function Logo({ subLength }) {
  const slogan = 'greenergy for life';

  return (
    <a href="#main" className={css.logo}>
      <EcosolutionLogo />
      <span className={css.esName}>ecosolution</span>
      <p className={css.esSlogan}>
        <span className={css.decor}>{slogan.substring(0, subLength)}</span>
        {slogan.substring(subLength)}
      </p>
    </a>
  );
}

Logo.propTypes = {
  subLength: PropTypes.number.isRequired,
};
