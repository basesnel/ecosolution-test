import Container from 'components/Container';
import Slide from 'components/Slide';
import Text from 'components/Text';
import Title from 'components/Title';

import { slides } from 'constants';

export default function Cases() {
  const { image, desc, place, date } = slides[0];
  return (
    <section>
      <Container>
        <Title level={2} caption="successful cases of our company" />
        <Text>Slider</Text>
        <button>Prev</button>
        <button>Next</button>
        <Slide image={image} desc={desc} place={place} date={date} />
      </Container>
    </section>
  );
}
