import PropTypes from 'prop-types';

import { ReactComponent as ArrowDown } from 'assets/images/arrow-down.svg';

import css from './ContactUsLink.module.css';

export default function ContactUsLink({ caption, ...delegated }) {
  return (
    <a className={css['contact-btn']} {...delegated}>
      <span className={css.caption}>{caption}</span>
      <span className={css.decor}>
        <ArrowDown />
      </span>
    </a>
  );
}

ContactUsLink.propTypes = {
  caption: PropTypes.string.isRequired,
};
