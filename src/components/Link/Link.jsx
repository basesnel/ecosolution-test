import PropTypes from 'prop-types';

const Link = props => {
  const { src, txt, ariaLabel, children, ...delegated } = props;

  const isLinkExternal = par => par.toLowerCase().match(/^http/);

  const secureAttributes = {
    ...(isLinkExternal(src) && {
      target: '_blank',
      rel: 'noopener noreferrer nofollow',
    }),
  };
  const label = !txt ? ariaLabel : null;

  return (
    <a href={src} {...secureAttributes} aria-label={label} {...delegated}>
      {children}
    </a>
  );
};

Link.propTypes = {
  src: PropTypes.string.isRequired,
  txt: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.any,
  delegated: PropTypes.any,
};

Link.defaultProps = {
  txt: null,
  ariaLabel: null,
  children: null,
  delegated: null,
};

export default Link;
