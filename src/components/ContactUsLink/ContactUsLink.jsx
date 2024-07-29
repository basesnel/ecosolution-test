import PropTypes from 'prop-types';
import { Icon, Link } from 'components';

import styles from './styles.module.css';

const ContactUsLink = props => {
  const { caption, ...delegated } = props;

  return (
    <Link
      src="#contacts"
      ariaLabel="Go to Contacts section"
      className={styles.btn}
      {...delegated}
    >
      <span className={styles.caption}>{caption}</span>
      <span className={styles.decor} aria-hidden={true}>
        <Icon
          icon="link-arrow"
          width={14}
          height={15}
          className={styles.icon}
        />
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
