import PropTypes from 'prop-types';

import icons from '../../assets/images/icons.svg';

import css from './Icon.module.css';

export default function Icon({ icon, label, width, height, direction = null }) {
  const variation = direction ? `${css.icon} ${css[direction]}` : `${css.icon}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      width={width}
      height={height}
      className={variation}
    >
      <use href={`${icons}#${icon}`}></use>
    </svg>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  direction: PropTypes.string,
};
