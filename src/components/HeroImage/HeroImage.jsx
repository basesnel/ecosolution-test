import PropTypes from 'prop-types';

import { imageSizes } from 'constants';

import css from './HeroImage.module.css';

const HeroImage = props => {
  const { isLazy } = props;
  const { heroImage } = css;

  return (
    <picture>
      <source
        srcSet={`
                ${require(`../../assets/images/hero/hero-desktop-1x.webp`)} 1x,
                ${require(`../../assets/images/hero/hero-desktop-2x.webp`)} 2x,
                ${require(`../../assets/images/hero/hero-desktop-3x.webp`)} 3x,
              `}
        type="image/webp"
        media="(min-width: 769px)"
      />
      <source
        srcSet={`
                ${require(`../../assets/images/hero/hero-tablet-1x.webp`)} 1x,
                ${require(`../../assets/images/hero/hero-tablet-2x.webp`)} 2x,
                ${require(`../../assets/images/hero/hero-tablet-3x.webp`)} 3x,
              `}
        type="image/webp"
        media="(min-width: 481px) and (max-width: 768px)"
      />
      <source
        srcSet={`
                ${require(`../../assets/images/hero/hero-mobile-1x.webp`)} 1x,
                ${require(`../../assets/images/hero/hero-mobile-2x.webp`)} 2x,
                ${require(`../../assets/images/hero/hero-mobile-3x.webp`)} 3x,
              `}
        type="image/webp"
        media="(max-width: 480px)"
      />
      <source
        srcSet={`
                ${require(`../../assets/images/hero/hero-desktop-1x.jpg`)} 1x,
                ${require(`../../assets/images/hero/hero-desktop-2x.jpg`)} 2x,
                ${require(`../../assets/images/hero/hero-desktop-3x.jpg`)} 3x,
              `}
        type="image/jpeg"
        media="(min-width: 769px)"
      />
      <source
        srcSet={`
                ${require(`../../assets/images/hero/hero-tablet-1x.jpg`)} 1x,
                ${require(`../../assets/images/hero/hero-tablet-2x.jpg`)} 2x,
                ${require(`../../assets/images/hero/hero-tablet-3x.jpg`)} 3x,
              `}
        type="image/jpeg"
        media="(min-width: 481px) and (max-width: 768px)"
      />
      <source
        srcSet={`
                ${require(`../../assets/images/hero/hero-mobile-1x.jpg`)} 1x,
                ${require(`../../assets/images/hero/hero-mobile-2x.jpg`)} 2x,
                ${require(`../../assets/images/hero/hero-mobile-3x.jpg`)} 3x,
              `}
        type="image/jpeg"
        media="(max-width: 480px)"
      />
      <img
        loading={isLazy}
        srcSet={`
                ${require(`../../assets/images/hero/hero-mobile-2x.jpg`)}  480w,
                ${require(`../../assets/images/hero/hero-tablet-2x.jpg`)}  768w,
                ${require(`../../assets/images/hero/hero-desktop-2x.jpg`)} 1280w,
              `}
        src={require(`../../assets/images/hero/hero-tablet-2x.jpg`)}
        alt="Wind turbine clean energy"
        sizes={imageSizes[0]}
        className={heroImage}
      />
    </picture>
  );
};

HeroImage.propTypes = {
  isLazy: PropTypes.oneOf(['lazy']),
};

HeroImage.defaultProps = {
  isLazy: null,
};

export default HeroImage;
