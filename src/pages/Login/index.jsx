import React, {useState, useEffect} from "react";
import "./styles.css";

export const Login = () => {

    const [action, setAction] = useState('');

    const registerLink = (e) => {
        e.preventDefault();
        setAction(' active');
    }

    const loginLink = (e) => {
        e.preventDefault();
        setAction('');
    }
    
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------

    return (
    <div className={`wrapper${action}`}>
        <div className="form__box login">
            <form>
                <h1>HOLA! GENIALACADEMY</h1>
                <h2>Iniciar Sesión</h2>
                <div className="input__box">
                    Correo electrónico:
                    <input type="email"/>
                </div>
                <div className="input__box">
                    Contraseña:
                    <input type="password"/>
                </div>
                <button>Iniciar Sesión</button>

            <div className="register__link">
                <p>
                {/* ¿No tienes una cuenta? <a href="#" onClick={registerLink}>Registrate</a> */}
                ¿No tienes una cuenta? <a href="#">Registrate</a>
                </p>
            </div>
            </form>
        </div>
    </div>
    );
};
