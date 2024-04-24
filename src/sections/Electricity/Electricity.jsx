import Section from 'components/Section';
import Container from 'components/Container';
import Title from 'components/Title';
import Counter from 'components/Counter';

export default function Electricity() {
  return (
    <Section part="electricity">
      <Container>
        <Title level={2} caption="electricity we produced for all time" />
        <Title level={3} caption={<Counter />} />
      </Container>
    </Section>
  );
}
