import PropTypes from 'prop-types';

import css from './Slide.module.css';

export default function Slide({ children, itemRef, ...delegated }) {
  return (
    <div className={css.slide} ref={itemRef} {...delegated}>
      {children}
    </div>
  );
}

Slide.propTypes = {
  itemRef: PropTypes.any,
};

Slide.defaultProps = {
  itemRef: null,
};
