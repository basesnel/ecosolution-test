import Header from 'sections/Header';
import Main from 'sections/Main';
import Values from 'sections/Values';
import Electricity from 'sections/Electricity';
// import Services from 'sections/Services';
import Cases from 'sections/Cases';
import Questions from 'sections/Questions';
import Customers from 'sections/Customers';
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
        {/* <Services /> */}
        <Cases />
        <Questions />
        <Customers />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
