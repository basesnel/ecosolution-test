import PropTypes from 'prop-types';
import { Icon, Link } from 'components';

import css from './ContactUsLink.module.css';

const ContactUsLink = props => {
  const { caption, ...delegated } = props;
  const { contactBtn, contactCaption, contactDecor, iconStyle } = css;

  return (
    <Link
      src="#contacts"
      ariaLabel="Go to Contacts section"
      className={contactBtn}
      {...delegated}
    >
      <span className={contactCaption}>{caption}</span>
      <span className={contactDecor}>
        <Icon icon="link-arrow" width={14} height={15} className={iconStyle} />
      </span>
    </Link>
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
