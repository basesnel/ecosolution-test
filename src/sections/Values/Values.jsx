import { imageSizes, values } from 'constants';
import {
  Section,
  Container,
  Title,
  Text,
  Grid,
  Card,
  CardImage,
  ResponsiveImage,
} from 'components';

import css from './Values.module.css';

const Values = () => {
  return (
    <Section part="values">
      <Container>
        <Title level={2} caption="main values of our company" />
        <div role="presentation" className={css.textWrap}>
          <Text>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </Text>
        </div>
        <Grid>
          {values.map(({ id, image, desc, title, icon, text }) => {
            if (id === 2 || id === 3)
              return (
                <CardImage key={id}>
                  <ResponsiveImage
                    isLazy="lazy"
                    image500={`values/${image}-1x`}
                    image1000={`values/${image}-2x`}
                    image1500={`values/${image}-3x`}
                    sizes={imageSizes[1]}
                    alt={desc}
                    cssName={css.valuesImage}
                  />
                </CardImage>
              );

            return (
              <Card
                key={id}
                title={<Title level={3} caption={title} />}
                icon={icon}
              >
                <Text>{text}</Text>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
};

export default Values;
