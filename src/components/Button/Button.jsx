import PropTypes from 'prop-types';

import { ReactComponent as ArrowRight } from 'assets/images/arrow-right.svg';

import css from './Button.module.css';

export default function Button({ caption, part = 'button', ...delegated }) {
  switch (part) {
    case 'button':
      return (
        <button className={css.btn} {...delegated}>
          {caption}
          <span className={css.decor}>
            <ArrowRight />
          </span>
        </button>
      );

    case 'link':
      return (
        <a className={css.btn} {...delegated}>
          {caption}
          <span className={css.decor}>
            <ArrowRight />
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
