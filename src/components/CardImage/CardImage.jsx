import PropTypes from 'prop-types';

import css from './CardImage.module.css';

export default function CardImage({ children }) {
  return <div className={css['card-image']}>{children}</div>;
}

CardImage.propTypes = {
  children: PropTypes.any.isRequired,
};
