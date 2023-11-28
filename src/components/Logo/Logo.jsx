import { ReactComponent as EcosolutionLogo } from 'assets/images/logo.svg';

import css from './Logo.module.css';

export default function Logo() {
  return (
    <a href="#main" className={css.logo}>
      <EcosolutionLogo />
    </a>
  );
}
