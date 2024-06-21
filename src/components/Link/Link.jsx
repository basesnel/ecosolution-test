import PropTypes from 'prop-types';

const Link = props => {
  const { src, txt, ariaLabel, children, ...delegated } = props;

  const isLinkExternal = par => par.toLowerCase().match(/^http/);

  return (
    <a
      href={src}
      {...(isLinkExternal(src) && {
        target: '_blank',
        rel: 'noopener noreferrer nofollow',
      })}
      aria-label={!txt ? ariaLabel : null}
      {...delegated}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.any,
  delegated: PropTypes.any,
};

Link.defaultProps = {
  children: null,
  delegated: null,
};

export default Link;
