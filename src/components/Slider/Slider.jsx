import PropTypes from 'prop-types';

import css from './Slider.module.css';

export default function Slider({ children }) {
  return (
    <div className={css.slider}>
      <div className={css.list}>{children}</div>
    </div>
  );
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};
