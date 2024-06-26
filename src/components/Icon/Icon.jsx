import PropTypes from 'prop-types';
import icons from '../../assets/images/icons.svg';

// import css from './Icon.module.css';

const Icon = props => {
  const { icon, width, height, ...delegated } = props;
  // const { iconStyle } = css;

  // console.log(delegated);

  // const variation = direction
  //   ? `${iconStyle} ${css[direction]}`
  //   : `${iconStyle}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      focusable="false"
      aria-hidden={true}
      {...delegated}
    >
      <use href={`${icons}#${icon}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  delegated: PropTypes.any,
};

Icon.defaultProps = {
  with: null,
  height: null,
  delegated: null,
};

export default Icon;
