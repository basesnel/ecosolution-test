import { useState, useEffect } from 'react';

import {
  Container,
  Logo,
  MainNav,
  MenuButton,
  ContactUsLink,
} from 'components';

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
      <Container variant="navBar">
        <Logo subLength={5} />
        <MainNav>
          <MenuButton />
          <ContactUsLink caption="Get in touch" href="#contacts" />
        </MainNav>
      </Container>
    </header>
  );
}
