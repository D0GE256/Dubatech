import Dubatech from "../../assets/DubatechBg.png"
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={Dubatech} alt="Dubatech logo" />
            <strong className="logoNombre">Dubatech</strong>
            <a href=""></a>
        </div>
    )
}

export default Header