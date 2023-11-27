import Container from 'components/Container';
import Grid from 'components/Grid';
import Card from 'components/Card';

export default function Values() {
  return (
    <section>
      <Container>
        <h2>main values of our company</h2>
        <p>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
        <Grid>
          <Card>
            <h3>openness</h3>
            <p>to the world, people, new ideas and projects</p>
          </Card>
          <Card>
            <h3>responsibility</h3>
            <p>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </Card>
          <Card>
            <h3>innovation</h3>
            <p>
              we use the latest technology to implement non-standard solutions
            </p>
          </Card>
          <Card>
            <h3>quality</h3>
            <p>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </Card>
        </Grid>
      </Container>
    </section>
  );
}
