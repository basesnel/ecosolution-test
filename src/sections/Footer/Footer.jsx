import Container from 'components/Container';
import Text from 'components/Text';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Text>Logo</Text>
        <button>Arrow Up</button>
        <ul>
          <li>
            <a href="https://www.facebook.com/">facebook</a>
            <a href="https://www.instagram.com/">instagram</a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/ch5Zc6Nrzai3HErQ6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </li>
          <li>
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          </li>
        </ul>
        <small>ecosolution &copy; 2023</small>
      </Container>
    </footer>
  );
}
