import Container from 'components/Container';
import RoundButton from 'components/RoundButton';
import Slide from 'components/Slide';
import Title from 'components/Title';

import { slides } from 'constants';
import { useState } from 'react';

import css from './Cases.module.css';

export default function Cases() {
  const [position, setPosition] = useState(0);

  return (
    <section>
      <Container>
        <Title level={2} caption="successful cases of our company" />
        <div className={css.control}>
          <span className={css.position}>{`0${position + 1} /0${
            slides.length
          }`}</span>
          <div className={css.switches}>
            <RoundButton
              direction="left"
              onClick={() => setPosition(p => p - 1)}
            />
            <RoundButton onClick={() => setPosition(p => p + 1)} />
          </div>
        </div>
        {slides.map(({ image, desc, place, enterprise, date }) => (
          <Slide
            key={image}
            image={image}
            desc={desc}
            place={place}
            enterprise={enterprise}
            date={date}
          />
        ))}
      </Container>
    </section>
  );
}
