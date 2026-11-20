import escudo from "../img/escudo-cucei.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img src={escudo} alt="Escudo de CUCEI" className="footer-logo" />

      <div className="footer-info">
        <p><strong>Estudiante:</strong> Daniel Munguía de la Rosa</p>
        <p><strong>Profesor:</strong> Zeus Emanuel Gutiérrez Cobián</p>
        <p><strong>Materia:</strong> Desarrollo de Aplicaciones Web en la Nube y Móviles</p>
        <p><strong>Calendario escolar:</strong> 2026B</p>
        <p><strong>Mes y año:</strong> Noviembre 2026</p>
        <p><strong>Institución:</strong> CUCEI – Universidad de Guadalajara</p>
      </div>
    </footer>
  );
}

export default Footer;