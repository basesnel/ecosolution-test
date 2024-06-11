import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import css from './RoundButton.module.css';

const RoundButton = props => {
  const { direction, filled, part, ...delegated } = props;
  const { roundBtn, roundLink, roundFilled } = css;

  switch (part) {
    case 'button':
      return (
        <button
          className={filled ? `${roundBtn} ${roundFilled}` : `${roundBtn}`}
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
              ? `${roundBtn} ${roundLink} ${roundFilled}`
              : `${roundBtn} ${roundLink}`
          }
          {...delegated}
        >
          <Icon icon="arrow-right" direction={direction} />
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
