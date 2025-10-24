import React, { useState } from "react";
import Input from "./Input";
import {useForm} from 'react-hook-form'

const Login = () => {

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onBlur' // Valida cuando el usuario deja de interactuar con el input (onBlur).
  })

  const onSubmit = (data) => {
    // Esta función se ejecuta solo si el formulario es válido.
    console.log("Formulario válido, datos:", data);
    // Aquí iría la lógica para enviar los datos a un servidor, etc.
  }

  const onInvalid = (errors) => {
    // Esta función se ejecuta si hay errores de validación.
    console.log("Formulario inválido, errores:", errors);
  }

    return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <h1>Iniciar Sesión</h1>
        <Input
          label="Usuario*"
          type='text'
          placeholder="Ingrese su nombre de usuario"
          id="username"
          {...register('username', { 
            required: "El nombre de usuario es obligatorio",
            minLength: {
              value: 3,
              message: 'El minimo es de 3 caracteres'
            },
          })}
        />
        {errors.username?.message && <span className="error-message" style={{color: 'red'}}>{errors.username.message}</span>}
       
        <Input
          label="Contraseña*"
          type='password'
          placeholder="Ingrese su contraseña"
          id="password"
          {...register('password', {required: "La contraseña es obligatoria"})}
        />
        {errors.password?.message && <span className="error-message" style={{color: 'red'}}>{errors.password.message}</span>}
        
        <div>
          <button type="submit" disabled={!isValid}>Iniciar Sesión</button>
        </div>
        
      </form>
    </div>
  );


};

export default Login;
