import Container from 'components/Container';
import Logo from 'components/Logo';

import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
}
