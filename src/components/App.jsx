import {
  Header,
  Main,
  Values,
  Electricity,
  Cases,
  Faq,
  ContactUs,
  Footer,
} from 'sections';

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
