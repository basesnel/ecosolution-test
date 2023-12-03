import { useState } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as MenuIcon } from 'assets/images/menu-icon.svg';

import Menu from 'components/Menu';

import css from './MenuButton.module.css';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button className={css.menuButton} onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </button>
      {isMenuOpen &&
        createPortal(
          <Menu
            onHide={event => {
              if (event.target === event.currentTarget) setIsMenuOpen(false);
            }}
            onClose={() => setIsMenuOpen(false)}
          />,
          document.body
        )}
    </>
  );
}
