import {
  Section,
  Container,
  Title,
  FitContent,
  Contacts,
  Form,
} from 'components';

const ContactUs = () => {
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
};

export default ContactUs;
