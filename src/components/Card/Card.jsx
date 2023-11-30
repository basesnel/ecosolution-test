import PropTypes from 'prop-types';

import icons from '../../assets/images/icons.svg';

import css from './Card.module.css';

export default function Card({ title, icon, children }) {
  return (
    <div className={css.card}>
      <div className={css['card-title']}>
        <svg className={css.icon}>
          <use href={`${icons}#${icon}`}></use>
        </svg>
        {title}
      </div>
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
};
