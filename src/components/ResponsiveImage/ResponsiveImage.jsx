import PropTypes from 'prop-types';

export default function ResponsiveImage({
  image480,
  image768,
  image1280,
  alt,
}) {
  return (
    <picture>
      <source
        srcSet={`
                ${require(`../../assets/images/${image480}.webp`)}   480w,
                ${require(`../../assets/images/${image768}.webp`)}   768w,
                ${require(`../../assets/images/${image1280}.webp`)} 1280w
              `}
        type="image/webp"
        sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
      />
      <img
        loading="lazy"
        srcSet={`
                ${require(`../../assets/images/${image480}.jpg`)}   480w,
                ${require(`../../assets/images/${image768}.jpg`)}   768w,
                ${require(`../../assets/images/${image1280}.jpg`)} 1280w
              `}
        src={require(`../../assets/images/${image480}.jpg`)}
        alt={alt}
        sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
      />
    </picture>
  );
}

ResponsiveImage.propTypes = {
  image320: PropTypes.string.isRequired,
  image640: PropTypes.string.isRequired,
  image960: PropTypes.string.isRequired,
  image1280: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
