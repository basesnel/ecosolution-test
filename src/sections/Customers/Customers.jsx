import Container from 'components/Container';
import Text from 'components/Text';
import Title from 'components/Title';

export default function Customers() {
  return (
    <section>
      <Container>
        <Title level={2} caption="our satisfied customers" />
        <Text>List of customers</Text>
      </Container>
    </section>
  );
}
