import Section from 'components/Section';
import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Button from 'components/Button';
import HeroImage from 'components/HeroImage';

import css from './Main.module.css';

export default function Main() {
  return (
    <Section part="main">
      <Container>
        <div role="presentation" className={css['main-title']}>
          <Title level={1} caption="renewable energy for any task" />
          <div role="presentation" className={css['main-description']}>
            <Text>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </Text>
            <Button caption="Learn more" part="link" href="#cases" />
          </div>
        </div>
        <ul className={css['main-contacts']}>
          <li className={css['main-contact']}>
            <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
          </li>
          <li className={css['main-contact']}>
            <span>office@ecosolution.com</span>
          </li>
          <li className={css['main-contact']}>
            <span>ecosolution &copy; 2023</span>
          </li>
        </ul>
        <HeroImage />
      </Container>
    </Section>
  );
}
