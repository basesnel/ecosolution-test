import Container from 'components/Container';
import Title from 'components/Title';

export default function Services() {
  return (
    <section>
      <Container>
        <Title level={2} caption="the services we provide" />
        <div>
          <span>
            development and implementation of renewable enviromentally friendly
            energy sources
          </span>
        </div>
        <ul>
          <li>
            <span>solar</span>
          </li>
          <li>
            <span>wind</span>
          </li>
          <li>
            <span>hydro</span>
          </li>
          <li>
            <span>thermal</span>
          </li>
          <li>
            <span>nuclear</span>
          </li>
        </ul>
      </Container>
    </section>
  );
}
