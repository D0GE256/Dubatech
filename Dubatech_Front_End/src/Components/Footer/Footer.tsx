import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <div className="social-icons">
            <span className="icon">X</span>
            <span className="icon">O</span>
            <span className="icon">▶</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Novedades</h3>
          <p>Suscríbete a nuestras últimas noticias aquí</p>
        </div>

        <div className="footer-column">
          <h3>Aviso Legal</h3>
          <ul>
            <li>Términos y condiciones</li>
            <li>Política de privacidad</li>
            <li>Política de cookies</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Dubatech S.A. 2025 – Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
