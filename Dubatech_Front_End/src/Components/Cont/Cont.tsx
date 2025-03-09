import "./Cont.css";
import Servers from "../../assets/servers.webp";

const Cont = () => {
  return (
    <div className="row marginTop" id="Cont">
      <div className="text">
      <h1 className="t1 margin textRight">Propuesta de valor</h1>
      <p className="p1 margin textRight">
          En Dubatech, ofrecemos productos y soluciones tecnológicas innovadoras
          para empresas y profesionales que buscan optimizar sus procesos,
          mejorar su presencia digital y potenciar su crecimiento. Nos dirigimos
          a empresas, emprendedores y profesionales independientes que buscan
          tecnología de vanguardia, consultoría especializada y servicios
          digitales adaptados a sus necesidades.
        </p>
      </div>
      <img className="img" src={Servers} alt="Servers" />
    </div>
  );
};

export default Cont;
