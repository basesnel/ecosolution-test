import Container from 'components/Container';
import Text from 'components/Text';
import Title from 'components/Title';

export default function Cases() {
  return (
    <section>
      <Container>
        <Title level={2} caption="successful cases of our company" />
        <Text>Slider</Text>
        <button>Prev</button>
        <button>Next</button>
      </Container>
    </section>
  );
}
