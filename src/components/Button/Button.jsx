import PropTypes from 'prop-types';
import { Icon } from 'components';

import styles from './styles.module.css';

const Button = props => {
  const { caption, part = 'button', ...delegated } = props;

  switch (part) {
    case 'button':
      return (
        <button className={styles.btn} {...delegated}>
          {caption}
          <span className={styles.decor} aria-hidden={true}>
            <Icon
              icon="btn-arrow"
              width={16}
              height={17}
              className={styles.icon}
            />
          </span>
        </button>
      );

    case 'link':
      return (
        <a className={styles.btn} {...delegated}>
          {caption}
          <span className={styles.decor} aria-hidden={true}>
            <Icon
              icon="btn-arrow"
              width={16}
              height={17}
              className={styles.icon}
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
