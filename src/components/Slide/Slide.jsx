import PropTypes from 'prop-types';

import css from './Slide.module.css';

const Slide = props => {
  const { children, itemRef, ...delegated } = props;
  const { slide } = css;

  return (
    <div className={slide} ref={itemRef} {...delegated}>
      {children}
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  itemRef: PropTypes.any,
  delegated: PropTypes.any,
};

Slide.defaultProps = {
  itemRef: null,
  delegated: null,
};

export default Slide;
