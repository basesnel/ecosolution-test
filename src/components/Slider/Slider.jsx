import PropTypes from 'prop-types';

import css from './Slider.module.css';

const Slider = props => {
  const { children } = props;
  const { slider, list } = css;

  return (
    <div className={slider}>
      <div className={list}>{children}</div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
