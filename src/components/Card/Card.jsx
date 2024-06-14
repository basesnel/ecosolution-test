import PropTypes from 'prop-types';
import { Icon } from 'components';

import css from './Card.module.css';

const Card = props => {
  const { title, icon, children } = props;
  const { card, cardTitle } = css;

  return (
    <div className={card}>
      <div className={cardTitle}>
        <Icon icon={icon} />
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
