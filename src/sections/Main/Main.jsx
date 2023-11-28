import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

export default function Main() {
  return (
    <section>
      <Container variant="main">
        <Title level={1} caption="renewable energy for any task" />
        <Text>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </Text>
        <button>Learn more</button>
      </Container>
    </section>
  );
}
