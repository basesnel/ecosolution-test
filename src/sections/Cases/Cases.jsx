import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import Section from 'components/Section';
import Container from 'components/Container';
import RoundButton from 'components/RoundButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';
import Title from 'components/Title';
import Text from 'components/Text';
import ResponsiveImage from 'components/ResponsiveImage';

import { slides } from 'constants';
import { imageSizes } from 'constants';

import css from './Cases.module.css';

export default function Cases() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  const formattedNum = num => {
    return num.toString().padStart(2, '0');
  };

  return (
    <Section part="cases">
      <Container>
        <Title level={2} caption="successful cases of our company" />
        <div className={css.control}>
          <div>
            <span className={css.position}>{formattedNum(index + 1)}</span>
            <span className={css.length}>
              {` /${formattedNum(slides.length)}`}
            </span>
          </div>
          <div className={css.switches}>
            <RoundButton
              direction="left"
              onClick={() => {
                flushSync(() => {
                  if (index > 0) {
                    setIndex(index - 1);
                  } else {
                    setIndex(slides.length - 1);
                  }
                });
                selectedRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'end',
                });
              }}
            />
            <RoundButton
              onClick={() => {
                flushSync(() => {
                  if (index < slides.length - 1) {
                    setIndex(index + 1);
                  } else {
                    setIndex(0);
                  }
                });
                selectedRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'start',
                });
              }}
            />
          </div>
        </div>
        <Slider>
          {slides.map(({ image, desc, place, enterprise, date }, i) => (
            <Slide key={image} itemRef={index === i ? selectedRef : null}>
              <div className={css['case-thumb']}>
                <ResponsiveImage
                  isLazy="lazy"
                  image500={`slider/${image}-1x`}
                  image1000={`slider/${image}-2x`}
                  image1500={`slider/${image}-3x`}
                  sizes={imageSizes[1]}
                  alt={desc}
                  cssName={css['case-img']}
                />
              </div>
              <div className={css['case-content']}>
                <div className={css['case-fitcaption']}>
                  <Text variant="caption">
                    <span className={css['case-caption']}>{place}</span>
                    <span className={css['case-caption']}>{enterprise}</span>
                  </Text>
                  <RoundButton direction="right-up" filled={true} />
                </div>
                <div className={css['case-fitdesc']}>
                  <Text variant="small">{desc}</Text>
                  <Text variant="small">{date}</Text>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
      </Container>
    </Section>
  );
}
