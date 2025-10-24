import React, { useState } from "react";
import Input from "./Inpunt";

const Login = () => {

    // Estado para guardar los datos del formulario (Inputs controlados)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Estado para guardar los errores de validación
  const [errors, setErrors] = useState({});

  // Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    // Funcion para validar el formulario
    const validate = () => {
        const newErrors = {};
        if (!formData.username) {
            newErrors.username = "El nombre de usuario es obligatorio";
        }
        if (!formData.password) {
            newErrors.password = "La contraseña es obligatoria";
        }
        return newErrors;
    };

    // Manejador para el envio del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); //Evitamos que la página se recargue
        
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Si no hay errores, podemos enviar el formulario
            console.log("Formulario enviado:", formData);
        }else{
            console.log("Errores de validación:", validationErrors);
        }
    };

    return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
        <Input
          label="Usuario"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
          placeholder="Ingrese su nombre de usuario"
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Ingrese su contraseña"
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>

  );




};

export default Login;
