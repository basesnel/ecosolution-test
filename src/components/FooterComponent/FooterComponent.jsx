import PropTypes from 'prop-types';

import css from './FooterComponent.module.css';

const FooterComponent = props => {
  const { children } = props;
  const { footerComponent } = css;

  return <footer className={footerComponent}>{children}</footer>;
};

FooterComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterComponent;
