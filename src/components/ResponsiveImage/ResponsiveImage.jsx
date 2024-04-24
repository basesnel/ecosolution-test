import PropTypes from 'prop-types';

export default function ResponsiveImage({
  isLazy,
  image500,
  image1000,
  image1500,
  sizes,
  alt,
  cssName,
}) {
  return (
    <picture>
      <source
        srcSet={`
                ${require(`../../assets/images/${image500}.webp`)}   480w,
                ${require(`../../assets/images/${image1000}.webp`)}   768w,
                ${require(`../../assets/images/${image1500}.webp`)} 1280w
              `}
        type="image/webp"
        sizes={sizes}
      />
      <img
        loading={isLazy}
        srcSet={`
                ${require(`../../assets/images/${image500}.jpg`)}   480w,
                ${require(`../../assets/images/${image1000}.jpg`)}   768w,
                ${require(`../../assets/images/${image1500}.jpg`)} 1280w
              `}
        src={require(`../../assets/images/${image500}.jpg`)}
        alt={alt}
        sizes={sizes}
        className={cssName}
      />
    </picture>
  );
}

ResponsiveImage.propTypes = {
  isLazy: PropTypes.oneOf(['lazy']),
  image500: PropTypes.string.isRequired,
  image1000: PropTypes.string.isRequired,
  image1500: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cssName: PropTypes.string,
};

ResponsiveImage.defaultProps = {
  isLazy: null,
  cssName: null,
};
