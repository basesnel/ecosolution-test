import FooterComponent from 'components/FooterComponent';
import Container from 'components/Container';
import FitContent from 'components/FitContent';
import Logo from 'components/Logo';
import RoundButton from 'components/RoundButton';
import Contacts from 'components/Contacts';
import Copyright from 'components/Copyright';

export default function Footer() {
  return (
    <FooterComponent>
      <Container>
        <FitContent>
          <Logo subLength={5} />
          <RoundButton part="link" direction="up" filled={true} href="#main" />
          <Contacts />
          <Copyright caption="ecosolution &copy; 2023" />
        </FitContent>
      </Container>
    </FooterComponent>
  );
}
