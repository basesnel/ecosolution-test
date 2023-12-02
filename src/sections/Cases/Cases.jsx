import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import Section from 'components/Section';
import Container from 'components/Container';
import RoundButton from 'components/RoundButton';
import Slider from 'components/Slider';
import Slide from 'components/Slide';
import Title from 'components/Title';

import { slides } from 'constants';

import css from './Cases.module.css';

export default function Cases() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  const formattedNum = num => {
    return num > 9 ? num : `0${num}`;
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
                  inline: 'center',
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
                  inline: 'center',
                });
              }}
            />
          </div>
        </div>
        <Slider>
          {slides.map(({ image, desc, place, enterprise, date }, i) => (
            <Slide
              key={image}
              itemRef={index === i ? selectedRef : null}
              image={image}
              desc={desc}
              place={place}
              enterprise={enterprise}
              date={date}
            />
          ))}
        </Slider>
      </Container>
    </Section>
  );
}
