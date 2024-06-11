import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = props => {
  const { children, part } = props;
  const { section } = css;

  const variation = part ? `${css[part]}` : '';
  return (
    <section className={`${section} ${variation}`} id={part}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  part: PropTypes.string,
};

Section.defaultProps = {
  part: null,
};

export default Section;
