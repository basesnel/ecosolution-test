import PropTypes from 'prop-types';

import { menu } from 'constants';

import icons from '../../assets/images/icons.svg';

import css from './Menu.module.css';

export default function Menu({ onClose, onHide }) {
  return (
    <div className={css.backdrop} onClick={onHide}>
      <div className={css.menu}>
        <button className={css['menu-close']} onClick={onClose}>
          <svg className={css['icon-close']}>
            <use href={`${icons}#menu-close`}></use>
          </svg>
          Close
        </button>
        <ul className={css['menu-list']}>
          {menu.map(({ id, item }) => (
            <li key={id} className={css['menu-item']}>
              <a href={`#${id}`} className={css['menu-link']} onClick={onClose}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className={css['menu-socnet']}>
          <li className={css['item-socnet']}>
            <a className={css['link-socnet']} href="https://www.facebook.com">
              <svg className={css['icon-socnet']}>
                <use href={`${icons}#menu-facebook`}></use>
              </svg>
            </a>
          </li>
          <li className={css['item-socnet']}>
            <a className={css['link-socnet']} href="https://www.instagram.com">
              <svg className={css['icon-socnet']}>
                <use href={`${icons}#menu-instagram`}></use>
              </svg>
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
