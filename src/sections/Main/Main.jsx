import { Section, Container, Title, Text, Button, HeroImage } from 'components';

import css from './Main.module.css';

const Main = () => {
  const { mainTitle, mainDescription } = css;

  return (
    <Section part="main">
      <Container>
        <div role="presentation" className={mainTitle}>
          <Title level={1} caption="renewable energy for any task" />
          <div role="presentation" className={mainDescription}>
            <Text>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </Text>
            <Button caption="Learn more" part="link" href="#cases" />
          </div>
        </div>
        <ul className={css.mainContacts}>
          <li className={css.mainContact}>
            <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
          </li>
          <li className={css.mainContact}>
            <span>office@ecosolution.com</span>
          </li>
          <li className={css.mainContact}>
            <span>ecosolution &copy; 2023</span>
          </li>
        </ul>
        <HeroImage />
      </Container>
    </Section>
  );
};

export default Main;
