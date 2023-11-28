import Header from 'sections/Header';
import Main from 'sections/Main';
import Values from 'sections/Values';
import Electricity from 'sections/Electricity';
import Cases from 'sections/Cases';
import Questions from 'sections/Questions';

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Values />
        <Electricity />
        <Cases />
        <Questions />
      </main>
    </>
  );
}

export default App;
