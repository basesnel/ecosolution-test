import PropTypes from 'prop-types';

import css from './FitContent.module.css';

const FitContent = props => {
  const { children, variant } = props;
  const { fitContent } = css;

  const variation = variant ? `${css[variant]}` : '';
  return (
    <div role="presentation" className={`${fitContent} ${variation}`}>
      {children}
    </div>
  );
};

FitContent.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

FitContent.defaultProps = {
  variant: null,
};

export default FitContent;
