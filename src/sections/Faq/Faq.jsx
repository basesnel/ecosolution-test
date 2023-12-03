import Container from 'components/Container';
import Title from 'components/Title';
import Section from 'components/Section';
import Questions from 'components/Questions';

export default function Faq() {
  return (
    <Section part="faq">
      <Container>
        <Title level={2} caption="frequently asked questions" />
        <Questions />
        <button>Contact Us</button>
      </Container>
    </Section>
  );
}
