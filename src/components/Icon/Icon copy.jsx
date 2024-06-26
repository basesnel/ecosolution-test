import PropTypes from 'prop-types';
import icons from '../../assets/images/icons.svg';

import css from './Icon.module.css';

const Icon = props => {
  const { icon, direction, width, height } = props;
  const { iconStyle } = css;

  const variation = direction
    ? `${iconStyle} ${css[direction]}`
    : `${iconStyle}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={variation}
      width={width}
      height={height}
      focusable="false"
      aria-hidden={true}
    >
      <use href={`${icons}#${icon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  direction: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Icon.defaultProps = {
  direction: null,
  with: null,
  height: null,
};

export default Icon;
