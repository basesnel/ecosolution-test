import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Button from 'components/Button';

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
        <Button caption="Learn more" />
        <ul>
          <li>
            <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
          </li>
          <li>
            <span>office@ecosolution.com</span>
          </li>
        </ul>
      </Container>
    </section>
  );
}
