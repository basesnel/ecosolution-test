import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Button from 'components/Button';

import css from './Main.module.css';
import Section from 'components/Section';

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
        <img
          src={require('../../assets/images/hero/hero-tablet-2x.jpg')}
          width="708"
          alt="Wind turbine clean energy"
          className={css['main-hero']}
        />
      </Container>
    </Section>
  );
}
