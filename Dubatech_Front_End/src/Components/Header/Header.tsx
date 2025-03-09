    import Dubatech from "../../assets/DubatechBg.png";
    import "./Header.css";
    const Header = () => {
    return (
        <div id="header">
        <div className="logoDiv">
            <img className="logo" src={Dubatech} alt="Dubatech logo" />
            <strong className="logoNombre">Dubatech</strong>
        </div>
        <div className="strongs">
            <strong className="Inicio">Inicio</strong>
            <strong className="Servicios">Servicios</strong>
            <strong className="Nosotros">Nosotros</strong>
            <strong className="Contacto">Contacto</strong>
        </div>
        </div>
    );
    };

    export default Header;
