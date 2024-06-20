import PropTypes from 'prop-types';
import { menu } from 'constants';
import { Icon } from 'components';

import css from './Menu.module.css';

const Menu = props => {
  const { onClose, onHide } = props;
  const {
    menuBackdrop,
    menuBlock,
    menuClose,
    menuList,
    menuItem,
    menuLink,
    menuSocnet,
    socnetItem,
    socnetLink,
  } = css;

  return (
    <div className={menuBackdrop} onClick={onHide}>
      <div className={menuBlock}>
        <button
          className={menuClose}
          onClick={onClose}
          type="button"
          aeia-label="Close the menu"
        >
          <Icon icon="menu-close" width={20} height={20} />
          Close
        </button>
        <ul className={menuList}>
          {menu.map(({ id, item }) => (
            <li key={id} className={menuItem}>
              <a
                href={`#${id}`}
                className={menuLink}
                onClick={onClose}
                aria-label={`Go to section ${item}`}
              >
                {item}
                <Icon icon="menu-arrow" width={16} height={16} />
              </a>
            </li>
          ))}
        </ul>
        <ul className={menuSocnet}>
          <li className={socnetItem}>
            <a
              className={socnetLink}
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Go to Facebook page"
            >
              <Icon icon="menu-facebook" width={24} height={24} />
            </a>
          </li>
          <li className={socnetItem}>
            <a
              className={socnetLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Go to Instagram page"
            >
              <Icon icon="menu-instagram" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  onHide: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Menu;
