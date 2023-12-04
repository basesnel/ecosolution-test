import PropTypes from 'prop-types';

import icons from '../../assets/images/icons.svg';

import css from './RoundButton.module.css';

export default function RoundButton({
  direction = 'right',
  filled = false,
  part = 'button',
  ...delegated
}) {
  const variation =
    direction === 'right'
      ? `${css[direction]}`
      : `${css.right} ${css[direction]}`;

  switch (part) {
    case 'button':
      return (
        <button
          className={
            filled ? `${css['round-btn']} ${css.filled}` : `${css['round-btn']}`
          }
          {...delegated}
        >
          <svg className={variation}>
            <use href={`${icons}#arrow-right`}></use>
          </svg>
        </button>
      );

    case 'link':
      return (
        <a
          className={
            filled
              ? `${css['round-btn']} ${css.link} ${css.filled}`
              : `${css['round-btn']} ${css.link}`
          }
          {...delegated}
        >
          <svg className={variation}>
            <use href={`${icons}#arrow-right`}></use>
          </svg>
        </a>
      );

    default:
      return null;
  }
}

RoundButton.propTypes = {
  direction: PropTypes.string,
  filled: PropTypes.bool,
  part: PropTypes.string,
};
