import PropTypes from 'prop-types';

import Text from 'components/Text';

import css from './Slide.module.css';
import RoundButton from 'components/RoundButton';

export default function Slide({
  image,
  desc,
  place,
  enterprise,
  date,
  itemRef,
  ...delegated
}) {
  const image500 = `slider/${image}-1x`;
  const image1000 = `slider/${image}-2x`;
  const image1500 = `slider/${image}-3x`;

  return (
    <div className={css.slide} ref={itemRef} {...delegated}>
      <div className={css['slide-thumb']}>
        {/* <img
          className={css['slide-img']}
          src={require(`../../assets/images/slider/${image}-2x.jpg`)}
          alt={desc}
          width="640"
        /> */}
        <picture>
          <source
            srcSet={`
                ${require(`../../assets/images/${image500}.webp`)}   480w,
                ${require(`../../assets/images/${image1000}.webp`)}  768w,
                ${require(`../../assets/images/${image1500}.webp`)} 1280w
              `}
            type="image/webp"
            sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
          />
          <img
            loading="lazy"
            srcSet={`
                ${require(`../../assets/images/${image500}.jpg`)}   480w,
                ${require(`../../assets/images/${image1000}.jpg`)}  768w,
                ${require(`../../assets/images/${image1500}.jpg`)} 1280w
              `}
            src={require(`../../assets/images/${image500}.jpg`)}
            alt={desc}
            sizes="(min-width: 1280px) 50vw, (min-width: 768px) 50vw, 100vw"
          />
        </picture>
      </div>
      <div className={css['slide-content']}>
        <div className={css['slide-fitcaption']}>
          <Text variant="caption">
            <span className={css['slide-caption']}>{place}</span>
            <span className={css['slide-caption']}>{enterprise}</span>
          </Text>
          <RoundButton direction="right-up" filled={true} />
        </div>
        <div className={css['slide-fitdesc']}>
          <Text variant="small">{desc}</Text>
          <Text variant="small">{date}</Text>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
