import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import css from './RoundButton.module.css';

export default function RoundButton({
  direction = null,
  filled = false,
  part = 'button',
  ...delegated
}) {
  switch (part) {
    case 'button':
      return (
        <button
          className={
            filled ? `${css['round-btn']} ${css.filled}` : `${css['round-btn']}`
          }
          {...delegated}
        >
          <Icon icon="arrow-right" direction={direction} />
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
          <Icon icon="arrow-right" direction={direction} />
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
