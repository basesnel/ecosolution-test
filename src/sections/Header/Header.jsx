import Container from 'components/Container';

import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <p>Ecosolution logo and menu</p>
      </Container>
    </header>
  );
}
