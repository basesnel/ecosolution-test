import Section from 'components/Section';
import Container from 'components/Container';
import Title from 'components/Title';
import Contacts from 'components/Contacts';
import Form from 'components/Form';

export default function Customers() {
  return (
    <Section part="contacts">
      <Container>
        <Title level={2} caption="contact us" />
        <Contacts />
        <Form />
      </Container>
    </Section>
  );
}
