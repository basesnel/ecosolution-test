import PropTypes from 'prop-types';

import styles from './styles.module.css';

const CardImage = props => {
  const { children } = props;

  return <div className={styles.cardImage}>{children}</div>;
};

CardImage.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CardImage;
