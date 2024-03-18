import "./App.css";
import About from "./composants/About/About";
import BtnFooter from "./composants/Btn-Footer/Btn-Footer";
import Competences from "./composants/Competences/Competences";
import Footer from "./composants/Footer/Footer";
import Form from "./composants/Form/Form";
import Header from "./composants/Header/Header";
import Loader from "./composants/Loader/Loader";
import Projets from "./composants/Projets/Projets";
import UnProjet from "./composants/Un-Projet/UnProjet";
import Welcome from "./composants/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Loader />
      <Welcome />
      <Header />
      <About />
      <UnProjet />
      <Competences />
      <Projets />
      <Form />
      <Footer />
      <BtnFooter />
    </div>
  );
}

export default App;
