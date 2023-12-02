import Section from 'components/Section';
import Container from 'components/Container';
import Counter from 'components/Counter';
import Title from 'components/Title';

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
