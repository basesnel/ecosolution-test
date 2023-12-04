import Section from 'components/Section';
import Container from 'components/Container';
import Title from 'components/Title';
import Contacts from 'components/Contacts';
import Form from 'components/Form';
import FitContent from 'components/FitContent';

export default function Customers() {
  return (
    <Section part="contacts">
      <Container>
        <Title level={2} caption="contact us" />
        <FitContent>
          <Contacts />
          <Form />
        </FitContent>
      </Container>
    </Section>
  );
}
