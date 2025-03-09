import React, { useState } from "react";
import "./Contacto.css";

const Contacto: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ nombre, apellido, correo, telefono });
    alert("Datos enviados con éxito");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="t1 margin">Pongámonos en contacto</h1>
      <h3>Datos personales:</h3>

      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Ingresa tu apellido"
        />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo electrónico:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Ingresa tu correo"
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ingresa tu teléfono"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contacto;
