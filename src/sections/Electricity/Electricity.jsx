import { Section, Container, Title, Counter } from 'components';

const Electricity = () => {
  return (
    <Section part="electricity">
      <Container>
        <Title level={2} caption="electricity we produced for all time" />
        <Title level={3} caption={<Counter />} />
      </Container>
    </Section>
  );
};

export default Electricity;
