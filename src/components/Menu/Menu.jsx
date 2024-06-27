import PropTypes from 'prop-types';
import { menu } from 'constants';
import { Icon, Link } from 'components';

import { contacts } from 'constants';

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
    iconStyle,
  } = css;

  const socLinks = contacts[3].links;

  return (
    <div className={menuBackdrop} onClick={onHide}>
      <div className={menuBlock}>
        <button
          className={menuClose}
          onClick={onClose}
          type="button"
          aeia-label="Close the menu"
        >
          <Icon
            icon="menu-close"
            width={20}
            height={20}
            className={iconStyle}
          />
          Close
        </button>
        <ul className={menuList}>
          {menu.map(({ id, item }) => (
            <li key={id} className={menuItem}>
              <Link
                src={`#${id}`}
                className={menuLink}
                onClick={onClose}
                aria-label={`Go to section ${item}`}
              >
                {item}
                <Icon
                  icon="menu-arrow"
                  width={16}
                  height={16}
                  className={iconStyle}
                />
              </Link>
            </li>
          ))}
        </ul>
        <ul className={menuSocnet}>
          {socLinks.map(({ id, src, txt, ariaLabel, icon }) => (
            <li key={id} className={socnetItem}>
              <Link
                src={src}
                txt={txt}
                ariaLabel={ariaLabel}
                className={socnetLink}
              >
                <Icon
                  icon={icon}
                  width={24}
                  height={24}
                  className={iconStyle}
                />
              </Link>
            </li>
          ))}
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
