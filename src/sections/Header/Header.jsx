import { useState, useEffect } from 'react';

import Container from 'components/Container';
import Logo from 'components/Logo';
import MainNav from 'components/MainNav';
import MenuButton from 'components/MenuButton';
import ContactUsLink from 'components/ContactUsLink';

import css from './Header.module.css';

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
          <ContactUsLink caption="Get in touch" href="#contacts" />
        </MainNav>
      </Container>
    </header>
  );
}
