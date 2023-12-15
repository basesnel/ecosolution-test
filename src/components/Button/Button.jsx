import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import css from './Button.module.css';

export default function Button({ caption, part = 'button', ...delegated }) {
  switch (part) {
    case 'button':
      return (
        <button className={css.btn} {...delegated}>
          {caption}
          <span className={css.decor}>
            <Icon icon="btn-arrow" />
          </span>
        </button>
      );

    case 'link':
      return (
        <a className={css.btn} {...delegated}>
          {caption}
          <span className={css.decor}>
            <Icon icon="btn-arrow" />
          </span>
        </a>
      );

    default:
      return null;
  }
}

Button.propTypes = {
  caption: PropTypes.any.isRequired,
  part: PropTypes.string,
};
