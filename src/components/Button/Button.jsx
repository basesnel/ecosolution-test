import PropTypes from 'prop-types';
import { Icon } from 'components';

import css from './Button.module.css';

const Button = props => {
  const { caption, part = 'button', ...delegated } = props;
  const { btn, decor, iconStyle } = css;

  switch (part) {
    case 'button':
      return (
        <button className={btn} {...delegated}>
          {caption}
          <span className={decor} aria-hidden={true}>
            <Icon
              icon="btn-arrow"
              width={16}
              height={17}
              className={iconStyle}
            />
          </span>
        </button>
      );

    case 'link':
      return (
        <a className={btn} {...delegated}>
          {caption}
          <span className={decor} aria-hidden={true}>
            <Icon
              icon="btn-arrow"
              width={16}
              height={17}
              className={iconStyle}
            />
          </span>
        </a>
      );

    default:
      return null;
  }
};

Button.propTypes = {
  caption: PropTypes.any.isRequired,
  part: PropTypes.string,
  delegated: PropTypes.any,
};

Button.defaultProps = {
  part: 'button',
  delegated: null,
};

export default Button;
