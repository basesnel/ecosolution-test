import PropTypes from 'prop-types';
import Icon from 'components/Icon';

import css from './Button.module.css';

const Button = props => {
  const { caption, part = 'button', ...delegated } = props;
  const { btn, decor } = css;

  switch (part) {
    case 'button':
      return (
        <button className={btn} {...delegated}>
          {caption}
          <span className={decor}>
            <Icon icon="btn-arrow" />
          </span>
        </button>
      );

    case 'link':
      return (
        <a className={btn} {...delegated}>
          {caption}
          <span className={decor}>
            <Icon icon="btn-arrow" />
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
