import PropTypes from 'prop-types';
import icons from '../../assets/images/icons.svg';

const Icon = props => {
  const { icon, width, height, ...delegated } = props;

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
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  delegated: PropTypes.any,
};

Icon.defaultProps = {
  delegated: null,
};

export default Icon;
