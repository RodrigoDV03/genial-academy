import React, {useState} from "react";
import "./LoginRegister.css";

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    }

    const loginLink = () => {
        setAction('');
    }

    return (
    <div className={`wrapper${action}`}>
        <div className="form__box login">
            <form>
                <h1>HOLA! GENIALACADEMY</h1>
                <h2>Iniciar Sesión</h2>
                <div className="input__box">
                    Correo electrónico:
                    <input type="email" required />
                </div>
                <div className="input__box">
                    Contraseña:
                    <input type="password" required />
                </div>
                <button type="submit">Iniciar Sesión</button>

            <div className="register__link">
                <p>
                ¿No tienes una cuenta? <a href="#" onClick={registerLink}>Registrate</a>
                </p>
            </div>
            </form>
        </div>

        <div className="form__box register">
            <form>
                <h1>HOLA! GENIALACADEMY</h1>
                <h2>Regístrate</h2>
                <div className="input__box">
                    Nombres:
                    <input type="text" required />
                </div>
                <div className="input__box">
                    Apellidos:
                    <input type="text" required />
                </div>
                <div className="input__box">
                    Correo electrónico:
                    <input type="email" required />
                </div>
                <div className="input__box">
                    Contraseña:
                    <input type="password" required />
                </div>
                <button type="submit">Registrarse</button>

                <div className="register__link">
                    <p>
                        ¿Ya tienes una cuenta? <a href="#" onClick={loginLink}>Iniciar Sesión</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
    );
};

export default LoginRegister;
