import PropTypes from 'prop-types';

import Text from 'components/Text';

import css from './Slide.module.css';

export default function Slide({ image, desc, place, date }) {
  return (
    <div className={css.slide}>
      <div className={css['slide-thumb']}>
        <img
          className={css['slide-img']}
          src={require(`../..//assets/images/slider/${image}-2x.jpg`)}
          alt={desc}
          width="320"
        />
      </div>
      <div className={css['slide-content']}>
        <div className={css['slide-fitplace']}>
          <Text variant="caption">{place}</Text>
          <button>arrow</button>
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
