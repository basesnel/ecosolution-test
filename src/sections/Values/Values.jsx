import Container from 'components/Container';
import Grid from 'components/Grid';
import Card from 'components/Card';
import Text from 'components/Text';
import Title from 'components/Title';

export default function Values() {
  return (
    <section>
      <Container>
        <Title level={2} caption="main values of our company" />
        <Text>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </Text>
        <Grid>
          <Card>
            <Title level={3} caption="openness" />
            <Text>to the world, people, new ideas and projects</Text>
          </Card>
          <Card>
            <Title level={3} caption="responsibility" />
            <Text>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </Text>
          </Card>
          <Card>
            <Title level={3} caption="innovation" />
            <Text>
              we use the latest technology to implement non-standard solutions
            </Text>
          </Card>
          <Card>
            <Title level={3} caption="quality" />
            <Text>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </Text>
          </Card>
        </Grid>
      </Container>
    </section>
  );
}
