import {
  Section,
  Container,
  Title,
  Questions,
  Text,
  ContactUsLink,
} from 'components';

import css from './Faq.module.css';

const Faq = () => {
  return (
    <Section part="faq">
      <Container>
        <Title level={2} caption="frequently asked questions" />
        <div role="presentation" className={css.contentWrap}>
          <Questions />
          <div className={css.contactUs}>
            <Text>Didn&apos;t find the answer to your question?</Text>
            <ContactUsLink caption="Contact Us" href="#contacts" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
