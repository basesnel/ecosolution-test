import PropTypes from 'prop-types';

import css from './CardImage.module.css';

const CardImage = props => {
  const { children } = props;
  const { cardImage } = css;

  return <div className={cardImage}>{children}</div>;
};

CardImage.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CardImage;
