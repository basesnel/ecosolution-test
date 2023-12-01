import Container from 'components/Container';
import Counter from 'components/Counter';
import Title from 'components/Title';

import css from './Electricity.module.css';

export default function Electricity() {
  return (
    <section className={css.electricity}>
      <Container>
        <Title level={2} caption="electricity we produced for all time" />
        <Title level={3} caption={<Counter />} />
      </Container>
    </section>
  );
}
