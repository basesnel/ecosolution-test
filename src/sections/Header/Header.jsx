import Container from 'components/Container';
import Text from 'components/Text';

import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <Text>Ecosolution logo and menu</Text>
      </Container>
    </header>
  );
}
