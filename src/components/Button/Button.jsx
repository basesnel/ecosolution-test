import PropTypes from 'prop-types';

import { ReactComponent as ArrowRight } from 'assets/images/arrow-right.svg';

import css from './Button.module.css';

export default function Button({ caption }) {
  return (
    <button className={css.btn}>
      {caption}
      <span className={css.decor}>
        <ArrowRight />
      </span>
    </button>
  );
}

Button.propTypes = {
  caption: PropTypes.any.isRequired,
};
