import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import css from './ContactUsLink.module.css';

export default function ContactUsLink({ caption, ...delegated }) {
  return (
    <a className={css['contact-btn']} {...delegated}>
      <span className={css.caption}>{caption}</span>
      <span className={css.decor}>
        <Icon icon="link-arrow" />
      </span>
    </a>
  );
}

ContactUsLink.propTypes = {
  caption: PropTypes.string.isRequired,
};
