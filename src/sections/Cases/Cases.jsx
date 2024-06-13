import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { slides, imageSizes } from 'constants';
import {
  Section,
  Container,
  Title,
  RoundButton,
  Slider,
  Slide,
  ResponsiveImage,
  Text,
} from 'components';

import css from './Cases.module.css';

const Cases = () => {
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
              <div className={css.caseThumb}>
                <ResponsiveImage
                  isLazy="lazy"
                  image500={`slider/${image}-1x`}
                  image1000={`slider/${image}-2x`}
                  image1500={`slider/${image}-3x`}
                  sizes={imageSizes[1]}
                  alt={desc}
                  cssName={css.caseImg}
                />
              </div>
              <div className={css.caseContent}>
                <div className={css.caseFitcaption}>
                  <Text variant="caption">
                    <span className={css.caseCaption}>{place}</span>
                    <span className={css.caseCaption}>{enterprise}</span>
                  </Text>
                  <RoundButton direction="right-up" filled={true} />
                </div>
                <div className={css.caseFitdesc}>
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
};

export default Cases;
