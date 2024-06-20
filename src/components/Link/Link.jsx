import PropTypes from 'prop-types';

const Link = props => {
  const { src, children, ...delegated } = props;

  const isLinkExternal = par =>
    !(
      par.toLowerCase().includes('tel') || par.toLowerCase().includes('mailto')
    );

  return (
    <a
      href={src}
      {...(isLinkExternal(src) && {
        target: '_blank',
        rel: 'noopener noreferrer nofollow',
      })}
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
