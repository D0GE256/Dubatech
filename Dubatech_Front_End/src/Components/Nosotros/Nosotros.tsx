import "./Nosotros.css";
import Nos from "../../assets/nosotros.png";

const Nosotros = () => {
  return (
    <div className="row marginTop" id="Cont">
      <img className="img" src={Nos} alt="Servers" />
      <div className="text">
        <h1 className="t1 margin textLeft">Sobre nosotros</h1>
        <p className="p1 margin textLeft">
          En Dubatech, somos especialistas en productos y soluciones
          tecnológicas diseñadas para impulsar la transformación digital de
          empresas y profesionales. Nuestro objetivo es proporcionar
          herramientas innovadoras que optimicen procesos, mejoren la
          conectividad y potencien la productividad en el entorno digital.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
