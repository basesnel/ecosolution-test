import PropTypes from 'prop-types';

import { menu } from 'constants';

import Icon from 'components/Icon';

import css from './Menu.module.css';

export default function Menu({ onClose, onHide }) {
  return (
    <div className={css.backdrop} onClick={onHide}>
      <div className={css.menu}>
        <button
          className={css['menu-close']}
          onClick={onClose}
          aeia-label="Close the menu"
        >
          <Icon icon="menu-close" width={20} height={20} />
          Close
        </button>
        <ul className={css['menu-list']}>
          {menu.map(({ id, item }) => (
            <li key={id} className={css['menu-item']}>
              <a
                href={`#${id}`}
                className={css['menu-link']}
                onClick={onClose}
                aria-label={`Go to section ${item}`}
              >
                {item}
                <Icon icon="menu-arrow" width={16} height={16} />
              </a>
            </li>
          ))}
        </ul>
        <ul className={css['menu-socnet']}>
          <li className={css['item-socnet']}>
            <a
              className={css['link-socnet']}
              href="https://www.facebook.com"
              aria-label="Go to Facebook page"
            >
              <Icon icon="menu-facebook" width={24} height={24} />
            </a>
          </li>
          <li className={css['item-socnet']}>
            <a
              className={css['link-socnet']}
              href="https://www.instagram.com"
              aria-label="Go to Instagram page"
            >
              <Icon icon="menu-instagram" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Menu.propTypes = {
  onHide: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
