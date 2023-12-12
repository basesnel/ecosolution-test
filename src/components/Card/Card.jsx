import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import css from './Card.module.css';

export default function Card({ title, icon, children }) {
  return (
    <div className={css.card}>
      <div className={css['card-title']}>
        <Icon icon={icon} />
        {title}
      </div>
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
