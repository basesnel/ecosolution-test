import Container from 'components/Container';
import MainNav from 'components/MainNav';
import Logo from 'components/Logo';
import MenuButton from 'components/MenuButton';

import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <MainNav>
          <Logo />
          <MenuButton />
        </MainNav>
      </Container>
    </header>
  );
}
