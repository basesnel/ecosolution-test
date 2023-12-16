import { useState } from 'react';
import { createPortal } from 'react-dom';

import Menu from 'components/Menu';
import Icon from 'components/Icon';

import css from './MenuButton.module.css';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button className={css['menu-btn']} onClick={() => setIsMenuOpen(true)}>
        <Icon icon="menu" />
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
