import PropTypes from 'prop-types';
import { Icon } from 'components';

import css from './ContactUsLink.module.css';

const ContactUsLink = props => {
  const { caption, ...delegated } = props;
  const { contactBtn, contactCaption, contactDecor } = css;

  return (
    <a className={contactBtn} {...delegated}>
      <span className={contactCaption}>{caption}</span>
      <span className={contactDecor}>
        <Icon icon="link-arrow" />
      </span>
    </a>
  );
};

ContactUsLink.propTypes = {
  caption: PropTypes.string.isRequired,
  delegated: PropTypes.any,
};

ContactUsLink.defaultProps = {
  delegated: null,
};

export default ContactUsLink;
