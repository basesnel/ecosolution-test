import { useState } from 'react';
import { createPortal } from 'react-dom';
import Menu from 'components/Menu';
import Icon from 'components/Icon';

import css from './MenuButton.module.css';

const MenuButton = () => {
  const { menuBtn } = css;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button className={menuBtn} onClick={() => setIsMenuOpen(true)}>
        <Icon icon="menu" width={16} height={17} label="Open menu" />
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
};

export default MenuButton;
