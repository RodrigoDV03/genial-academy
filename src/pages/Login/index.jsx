import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalLogin from "../../components/Modals/Modal_Login/modalLogin";
import ModalErrorLogin from "../../components/Modals/Modal_Login/modalErrorLogin";
import eyeOpenIcon from "../../assets/images/eye-open.svg"; // Asegúrate de que la ruta sea correcta
import eyeClosedIcon from "../../assets/images/eye-closed.svg"; // Asegúrate de que la ruta sea correcta

import "./stylesLogin.css";

export const Login = () => {
    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [authError, setAuthError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://genial-academy-backend.onrender.com/auth/login', formValues);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', formValues.username);
            setIsSubmit(true);
            setAuthError(false);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setAuthError(true);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login__container">
            <div className="login__wrapper">
                <div className="login__form__box">
                    {isSubmit && ( <ModalLogin isOpen={isSubmit} onClose={() => setIsSubmit(false)} /> )}
                    {authError && ( <ModalErrorLogin isOpen={authError} onClose={() => setAuthError(false)} /> )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Inicia Sesión</h2>
                        <div className="login__input__box">
                            <div className="login__input__title">Nombre de Usuario:</div>
                            <input type="text" name="username" value={formValues.username} onChange={handleChange} required />
                        </div>
                        <div className="login__input__box">
                            <div className="login__input__title">Contraseña:</div>
                            <div className="login__password__input__container">
                                <input type={showPassword ? "text" : "password"} name="password" value={formValues.password} onChange={handleChange} required />
                                <button type="button" className="login__toggle__password" onClick={toggleShowPassword}>
                                    <img src={showPassword ? eyeOpenIcon : eyeClosedIcon} alt="toggle password visibility" />
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="login__Button">
                            Ingresar
                        </button>

                        <div className="register__link">
                            <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};