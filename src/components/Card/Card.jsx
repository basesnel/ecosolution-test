import PropTypes from 'prop-types';
import { Icon } from 'components';

import css from './Card.module.css';

const Card = props => {
  const { title, icon, children } = props;
  const { card, cardTitle, iconStyle } = css;

  return (
    <div className={card}>
      <div className={cardTitle}>
        <Icon icon={icon} width={24} height={24} className={iconStyle} />
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
