import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Section from 'components/Section';
import Questions from 'components/Questions';
import ContactUsLink from 'components/ContactUsLink';

import css from './Faq.module.css';

export default function Faq() {
  return (
    <Section part="faq">
      <Container>
        <Title level={2} caption="frequently asked questions" />
        <div role="presentation" className={css['content-wrap']}>
          <Questions />
          <div className={css['contact-us']}>
            <Text>Didn&apos;t find the answer to your question?</Text>
            <ContactUsLink caption="Contact Us" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
