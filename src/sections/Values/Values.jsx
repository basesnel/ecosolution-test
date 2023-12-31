import Section from 'components/Section';
import Container from 'components/Container';
import Grid from 'components/Grid';
import Card from 'components/Card';
import CardImage from 'components/CardImage';
import Text from 'components/Text';
import Title from 'components/Title';

import css from './Values.module.css';

export default function Values() {
  return (
    <Section part="values">
      <Container>
        <Title level={2} caption="main values of our company" />
        <div role="presentation" className={css['text-wrap']}>
          <Text>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </Text>
        </div>
        <Grid>
          <Card
            title={<Title level={3} caption="openness" />}
            icon="maximize-circle"
          >
            <Text>to the world, people, new ideas and projects</Text>
          </Card>
          <Card
            title={<Title level={3} caption="responsibility" />}
            icon="global-edit"
          >
            <Text>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </Text>
          </Card>
          <CardImage>
            <img
              src={require('../../assets/images/values/values-01-2x.jpg')}
              width="342"
              alt="wind farms fields"
              className={css['values-image']}
            />
          </CardImage>
          <CardImage>
            <img
              src={require('../../assets/images/values/values-02-2x.jpg')}
              width="342"
              alt="man worker firld by solar panels"
              className={css['values-image']}
            />
          </CardImage>
          <Card
            title={<Title level={3} caption="innovation" />}
            icon="cpu-charge"
          >
            <Text>
              we use the latest technology to implement non-standard solutions
            </Text>
          </Card>
          <Card title={<Title level={3} caption="quality" />} icon="ranking">
            <Text>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </Text>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}
