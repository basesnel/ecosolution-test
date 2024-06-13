import Header from 'sections/Header';
import Main from 'sections/Main';
import Values from 'sections/Values';
import Electricity from 'sections/Electricity';
import Cases from 'sections/Cases';
import Faq from 'sections/Faq';
import ContactUs from 'sections/ContactUs';
import Footer from 'sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Values />
        <Electricity />
        <Cases />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
