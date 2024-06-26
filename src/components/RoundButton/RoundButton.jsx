import PropTypes from 'prop-types';
import { Icon } from 'components';

import css from './RoundButton.module.css';

const RoundButton = props => {
  const { direction, filled, part, ...delegated } = props;
  const { roundBtn, roundLink, roundFilled, iconStyle } = css;

  const variation = direction
    ? `${iconStyle} ${css[direction]}`
    : `${iconStyle}`;

  switch (part) {
    case 'button':
      return (
        <button
          className={filled ? `${roundBtn} ${roundFilled}` : `${roundBtn}`}
          type="button"
          {...delegated}
        >
          <Icon
            icon="arrow-right"
            width={36}
            height={36}
            className={variation}
          />
        </button>
      );

    case 'link':
      return (
        <a
          className={
            filled
              ? `${roundBtn} ${roundLink} ${roundFilled}`
              : `${roundBtn} ${roundLink}`
          }
          {...delegated}
        >
          <Icon
            icon="arrow-right"
            width={36}
            height={36}
            className={variation}
          />
        </a>
      );

    default:
      return null;
  }
};

RoundButton.propTypes = {
  direction: PropTypes.string,
  filled: PropTypes.bool,
  part: PropTypes.string,
  delegated: PropTypes.any,
};

RoundButton.defaultProps = {
  direction: null,
  filled: false,
  part: 'button',
  delegated: null,
};

export default RoundButton;
