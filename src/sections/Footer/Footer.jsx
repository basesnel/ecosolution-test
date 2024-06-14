import {
  FooterComponent,
  Container,
  FitContent,
  Logo,
  RoundButton,
  Contacts,
  Copyright,
} from 'components';

const Footer = () => {
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
};

export default Footer;
