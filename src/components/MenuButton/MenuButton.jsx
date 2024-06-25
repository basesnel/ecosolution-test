import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, Icon } from 'components';

import css from './MenuButton.module.css';

const MenuButton = () => {
  const { menuBtn } = css;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const escFunction = event => {
      if (event.key === 'Escape') {
        isMenuOpen && closeMenu();
      }
    };

    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [isMenuOpen]);

  return (
    <>
      <button
        className={menuBtn}
        onClick={openMenu}
        type="button"
        aria-label="Open menu"
      >
        <Icon icon="menu" width={16} height={17} />
      </button>
      {isMenuOpen &&
        createPortal(
          <Menu
            onHide={event => {
              if (event.target === event.currentTarget) closeMenu();
            }}
            onClose={closeMenu}
          />,
          document.body
        )}
    </>
  );
};

export default MenuButton;
