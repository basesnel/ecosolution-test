import Container from 'components/Container';
import Title from 'components/Title';

export default function Customers() {
  return (
    <section>
      <Container>
        <Title level={2} caption="contact us" />
        <ul>
          <li>
            <span>phone:</span>
            <a href="tel:+380981234567">38 (098) 12 34 567</a>
            <a href="tel:+380981234567">38 (093) 12 34 567</a>
          </li>
          <li>
            <span>e-mail:</span>
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          </li>
          <li>
            <span>address:</span>
            <a
              href="https://maps.app.goo.gl/ch5Zc6Nrzai3HErQ6"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </li>
          <li>
            <span>social networks:</span>
            <a href="https://www.facebook.com/">facebook</a>
            <a href="https://www.instagram.com/">instagram</a>
          </li>
        </ul>
        <form>
          <label>
            <span>Name:</span>
            <input name="FullName" placeholder="John Rosie" />
          </label>
          <label>
            <span>E-mail:</span>
            <input name="Email" placeholder="johnrosie@gmail.com" />
          </label>
          <label>
            <span>Phone:</span>
            <input name="Phone" placeholder="380961234567" />
          </label>
          <label>
            <span>Message:</span>
            <textarea name="Message" placeholder="Your message" />
          </label>
          <button>Send</button>
        </form>
      </Container>
    </section>
  );
}
