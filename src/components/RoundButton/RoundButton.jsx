import PropTypes from 'prop-types';

import icons from '../../assets/images/icons.svg';

import css from './RoundButton.module.css';

export default function RoundButton({
  direction = 'right',
  filled = false,
  ...delegated
}) {
  const variation =
    direction === 'right'
      ? `${css[direction]}`
      : `${css.right} ${css[direction]}`;

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
}

RoundButton.propTypes = {
  caption: PropTypes.string,
};
