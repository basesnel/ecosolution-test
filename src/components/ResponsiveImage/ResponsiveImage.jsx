import PropTypes from 'prop-types';

export default function ResponsiveImage({
  image500,
  image1000,
  image1500,
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
        sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
      />
      <img
        loading="lazy"
        srcSet={`
                ${require(`../../assets/images/${image500}.jpg`)}   480w,
                ${require(`../../assets/images/${image1000}.jpg`)}   768w,
                ${require(`../../assets/images/${image1500}.jpg`)} 1280w
              `}
        src={require(`../../assets/images/${image500}.jpg`)}
        alt={alt}
        sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
        className={cssName}
      />
    </picture>
  );
}

ResponsiveImage.propTypes = {
  image500: PropTypes.string.isRequired,
  image1000: PropTypes.string.isRequired,
  image1500: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cssName: PropTypes.string,
};

ResponsiveImage.defaultProps = {
  cssName: null,
};
