import PropTypes from 'prop-types';
import { Link } from 'components';
import { ReactComponent as EcosolutionLogo } from 'assets/images/logo.svg';

import css from './Logo.module.css';

const Logo = props => {
  const { subLength } = props;
  const { esLogo, esName, esSlogan, esDecor } = css;

  const slogan = 'greenergy for life';

  return (
    <Link src="#main" className={esLogo}>
      <EcosolutionLogo />
      <span className={esName}>ecosolution</span>
      <p className={esSlogan}>
        <span className={esDecor}>{slogan.substring(0, subLength)}</span>
        {slogan.substring(subLength)}
      </p>
    </Link>
  );
};

Logo.propTypes = {
  subLength: PropTypes.number.isRequired,
};

export default Logo;
