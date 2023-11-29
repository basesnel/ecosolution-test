import Container from 'components/Container';
import MainNav from 'components/MainNav';
import Logo from 'components/Logo';
import MenuButton from 'components/MenuButton';

import css from './Header.module.css';
import ContactUsLink from 'components/ContactUsLink';

export default function Header() {
  return (
    <header className={css.header}>
      <Container variant="nav-bar">
        <Logo subLength={5} />
        <MainNav>
          <MenuButton />
          <ContactUsLink caption="Get in touch" />
        </MainNav>
      </Container>
    </header>
  );
}
