import "./App.css";
import Header from "./composants/Header/Header";
import Loader from "./composants/Loader/Loader";
import About from "./composants/About/About";
import Projets from "./composants/Projets/Projets";
import Competences from "./composants/Competences/Competences";
import Welcome from "./composants/Welcome/Welcome";
import UnProjet from "./composants/Un-Projet/UnProjet";
import Form from "./composants/Form/Form";
import Footer from "./composants/Footer/Footer";
import BtnFooter from "./composants/Btn-Footer/Btn-Footer";
import HeaderPhone from "./composants/HeaderPhone/HeaderPhone";
import WelcomePhone from "./composants/WelcomePhone/WelcomePhone";
function App() {
  return (
    <div className="App">
      <Loader />
      <Welcome />
      <Header />
      <About />
      <Projets />
      <Competences />
      <UnProjet />
      <Form />
      <Footer />
      <BtnFooter />
    </div>
  );
}

export default App;
