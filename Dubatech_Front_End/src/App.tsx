import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cont from "./Components/Cont/Cont";
import Servicios from "./Components/Servicios/Servicios";
import Nosotros from "./Components/Nosotros/Nosotros";
import Contacto from "./Components/Contacto/Contacto";

function App() {
  return (
    <div id="body">
      <Header></Header>
      <Cont></Cont>
      <Servicios></Servicios>
      <Nosotros></Nosotros>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  );
}

export default App;
