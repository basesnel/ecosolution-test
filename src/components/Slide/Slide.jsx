import PropTypes from 'prop-types';

import Text from 'components/Text';
import RoundButton from 'components/RoundButton';
import ResponsiveImage from 'components/ResponsiveImage';

import css from './Slide.module.css';

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
        <ResponsiveImage
          image500={image500}
          image1000={image1000}
          image1500={image1500}
          alt={desc}
        />
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
