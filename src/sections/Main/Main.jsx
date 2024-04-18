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
        {/* <img
          src={require('../../assets/images/hero/hero-tablet-2x.jpg')}
          width="708"
          alt="Wind turbine clean energy"
          className={css['main-hero']}
        /> */}
        <picture>
          <source
            srcSet={`
                ${require(`../../assets/images/hero/hero-desktop-1x.webp`)} 1x,
                ${require(`../../assets/images/hero/hero-desktop-2x.webp`)} 2x,
                ${require(`../../assets/images/hero/hero-desktop-3x.webp`)} 3x,
              `}
            type="image/webp"
            media="(min-width: 769px)"
          />
          <source
            srcSet={`
                ${require(`../../assets/images/hero/hero-tablet-1x.webp`)} 1x,
                ${require(`../../assets/images/hero/hero-tablet-2x.webp`)} 2x,
                ${require(`../../assets/images/hero/hero-tablet-3x.webp`)} 3x,
              `}
            type="image/webp"
            media="(min-width: 481px) and (max-width: 768px)"
          />
          <source
            srcSet={`
                ${require(`../../assets/images/hero/hero-mobile-1x.webp`)} 1x,
                ${require(`../../assets/images/hero/hero-mobile-2x.webp`)} 2x,
                ${require(`../../assets/images/hero/hero-mobile-3x.webp`)} 3x,
              `}
            type="image/webp"
            media="(max-width: 480px)"
          />
          <source
            srcSet={`
                ${require(`../../assets/images/hero/hero-desktop-1x.jpg`)} 1x,
                ${require(`../../assets/images/hero/hero-desktop-2x.jpg`)} 2x,
                ${require(`../../assets/images/hero/hero-desktop-3x.jpg`)} 3x,
              `}
            type="image/jpeg"
            media="(min-width: 769px)"
          />
          <source
            srcSet={`
                ${require(`../../assets/images/hero/hero-tablet-1x.jpg`)} 1x,
                ${require(`../../assets/images/hero/hero-tablet-2x.jpg`)} 2x,
                ${require(`../../assets/images/hero/hero-tablet-3x.jpg`)} 3x,
              `}
            type="image/jpeg"
            media="(min-width: 481px) and (max-width: 768px)"
          />
          <source
            srcSet={`
                ${require(`../../assets/images/hero/hero-mobile-1x.jpg`)} 1x,
                ${require(`../../assets/images/hero/hero-mobile-2x.jpg`)} 2x,
                ${require(`../../assets/images/hero/hero-mobile-3x.jpg`)} 3x,
              `}
            type="image/jpeg"
            media="(max-width: 480px)"
          />
          <img
            loading="lazy"
            srcSet={`
                ${require(`../../assets/images/hero/hero-mobile-2x.jpg`)}  480w,
                ${require(`../../assets/images/hero/hero-tablet-2x.jpg`)}  768w,
                ${require(`../../assets/images/hero/hero-desktop-2x.jpg`)} 1280w,
              `}
            src={require(`../../assets/images/hero/hero-tablet-2x.jpg`)}
            alt="Wind turbine clean energy"
            sizes="100vw"
            className={css['main-hero']}
          />
        </picture>
      </Container>
    </Section>
  );
}
