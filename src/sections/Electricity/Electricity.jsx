import Container from 'components/Container';
import Title from 'components/Title';

import css from './Electricity.module.css';

export default function Electricity() {
  return (
    <section className={css.electricity}>
      <Container>
        <Title level={2} caption="electricity we produced for all time" />
        <span>1</span>
      </Container>
    </section>
  );
}
