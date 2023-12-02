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
  return (
    <div className={css.slide} ref={itemRef} {...delegated}>
      <div className={css['slide-thumb']}>
        <img
          className={css['slide-img']}
          src={require(`../../assets/images/slider/${image}-2x.jpg`)}
          alt={desc}
          width="640"
        />
      </div>
      <div className={css['slide-content']}>
        <div className={css['slide-fitcaption']}>
          <Text variant="caption">
            <span className={css['slide-caption']}>{place}</span>
            <span className={css['slide-caption']}>{enterprise}</span>
          </Text>
          {/* <Text variant="caption">{enterprise}</Text> */}
          <RoundButton direction="right-up" filled={true} />
          {/* <button>arrow</button> */}
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
