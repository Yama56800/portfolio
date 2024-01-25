import './App.css';
import Header from './composants/Header/Header'
import Loader from './composants/Loader/Loader';
import About from './composants/About/About'
import Projets from './composants/Projets/Projets';
import Competences from './composants/Competences/Competences';
import Welcome from './composants/Welcome/Welcome';
import Form from './composants/Form/Form';
import Footer from './composants/Footer/Footer';
import Btn_Footer from './composants/Btn-Footer/Btn-Footer';
function App() {
  return (
    <div className="App">
      <Loader />
      <Welcome />
      <Header />
      <About />
      <Projets />
      <Competences />
      <Form />
      <Footer />
      <Btn_Footer />
    </div>
  );
}

export default App;
