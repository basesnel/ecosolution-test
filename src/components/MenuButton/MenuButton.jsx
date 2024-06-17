import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, Icon } from 'components';

import css from './MenuButton.module.css';

const MenuButton = () => {
  const { menuBtn } = css;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className={menuBtn}
        onClick={() => {
          setIsMenuOpen(true);
          console.log(document.body.style);
          document.body.style.overflow = 'hidden';
        }}
      >
        <Icon icon="menu" width={16} height={17} label="Open menu" />
      </button>
      {isMenuOpen &&
        createPortal(
          <Menu
            onHide={event => {
              if (event.target === event.currentTarget) setIsMenuOpen(false);
            }}
            onClose={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          />,
          document.body
        )}
    </>
  );
};

export default MenuButton;
