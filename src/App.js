import './App.scss';
import Footer from './Components/Footer';
import Header_section from './Components/Header-section';
import Map_and_Partnerss_section from './Components/Map+Partners'
import Questions_section from './Components/Questions-section';

function App() {
  return (
    <>
      <main className="wrapper">
        <Header_section />
        <Map_and_Partnerss_section />
        <Questions_section />
      </main>
      <Footer />
    </>
  );
}

export default App;
