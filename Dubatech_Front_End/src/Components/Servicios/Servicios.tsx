import "./Servicios.css";
import dawYPos from "../../assets/daw_y_pos.webp";
import emp from "../../assets/sofware_empresarial.webp";
import db from "../../assets/dbimage.webp";

const Servicios = () => {
  return (
    <div className="column" id="Servicios">
      <h1 className="t1">Servicios</h1>
      <div id="prods" className="row">
        <div id="prod1" className="border">
          <img id="image" src={dawYPos} alt="No" />
          <ul>
            <li>Creación de sitios web a medida</li>
            <br />
            <li>Análisis y optimización de palabras clave</li>
            <br />
            <li>Actualización de contenidos y plugins</li>
          </ul>
        </div>
        <div id="prod2" className="border">
          <img id="image" src={emp} alt="No" />
          <ul>
            <li>ERP (Planificación de Recursos Empresariales)</li>
            <br />
            <li>CRM (Gestión de Relación con Clientes)</li>
            <br />
            <li>Software de Gestión Personalizado</li>
          </ul>
        </div>
        <div id="prod3" className="border">
          <img id="image" src={db} alt="No" />
          <ul>
            <li>Servidores dedicados para alto rendimiento</li>
            <br />
            <li>Soluciones de almacenamiento escalable</li>
            <br />
            <li>Firewalls y protección contra ataques cibernéticos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
