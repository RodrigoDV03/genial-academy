import React from "react";
import './LoginRegister.css';

const Register = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>HOLA! GENIALACADEMY</h1>
                <h2>Registarse</h2>
                <div className="input__box">
                    Nombres:
                    <input type="text" required/>
                </div>
                <div className="input__box">
                    Apellidos:
                    <input type="text" required/>
                </div>
                <div className="input__box">
                    Contraseña:
                    <input type="password" required/>
                </div>
                <button type="submit">Registrate</button>

                <div className="register__link">
                    <p>¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register;