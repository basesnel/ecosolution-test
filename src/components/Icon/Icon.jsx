import PropTypes from 'prop-types';

import icons from '../../assets/images/icons.svg';

import css from './Icon.module.css';

export default function Icon({ icon }) {
  return (
    <svg className={css.icon}>
      <use href={`${icons}#${icon}`}></use>
    </svg>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
