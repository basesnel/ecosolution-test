import PropTypes from 'prop-types';
import { Icon } from 'components';

import styles from './styles.module.css';

const Card = props => {
  const { title, icon, children } = props;

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <Icon icon={icon} width={24} height={24} className={styles.icon} />
        {title}
      </div>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Card;
