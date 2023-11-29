import { ReactComponent as MenuIcon } from 'assets/images/menu-icon.svg';

import css from './MenuButton.module.css';

export default function MenuButton() {
  return (
    <button className={css.menuButton}>
      <MenuIcon />
    </button>
  );
}
