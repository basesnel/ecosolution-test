import PropTypes from 'prop-types';
import icons from '../../assets/images/icons.svg';

import css from './Icon.module.css';

const Icon = props => {
  const { icon, label, width, height, direction } = props;
  const { iconStyle } = css;

  const variation = direction
    ? `${iconStyle} ${css[direction]}`
    : `${iconStyle}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={label}
      width={width}
      height={height}
      className={variation}
    >
      <use href={`${icons}#${icon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  direction: PropTypes.string,
};

Icon.defaultProps = {
  direction: null,
  label: null,
  with: null,
  height: null,
};

export default Icon;
