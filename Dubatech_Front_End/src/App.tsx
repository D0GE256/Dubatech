import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cont from "./Components/Cont/Cont";
import Servicios from "./Components/Servicios/Servicios";

function App() {
  return (
    <div id="body">
      <Header></Header>
      <Cont></Cont>
      <Servicios></Servicios>
      <Footer></Footer>
    </div>
  );
}

export default App;
