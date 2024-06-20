import { useState, useEffect } from 'react';
import {
  Container,
  Logo,
  MainNav,
  MenuButton,
  ContactUsLink,
} from 'components';

import css from './Header.module.css';

const { headerStyle, filled } = css;

const Header = () => {
  const [header, setHeader] = useState(`${headerStyle}`);

  const listenerScrollEvent = e => {
    if (window.scrollY < 105) {
      return setHeader(`${headerStyle}`);
    } else {
      return setHeader(`${headerStyle} ${filled}`);
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
          <ContactUsLink caption="Get in touch" />
        </MainNav>
      </Container>
    </header>
  );
};

export default Header;
