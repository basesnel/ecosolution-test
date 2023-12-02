import { useState, useEffect } from 'react';

import Container from 'components/Container';
import MainNav from 'components/MainNav';
import Logo from 'components/Logo';
import MenuButton from 'components/MenuButton';

import css from './Header.module.css';
import ContactUsLink from 'components/ContactUsLink';

export default function Header() {
  const [header, setHeader] = useState(`${css.header}`);

  const listenerScrollEvent = e => {
    if (window.scrollY < 105) {
      return setHeader(`${css.header}`);
    } else {
      return setHeader(`${css.header} ${css.filled}`);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenerScrollEvent);

    return () => window.removeEventListener('scroll', listenerScrollEvent);
  }, []);

  return (
    <header className={header}>
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
