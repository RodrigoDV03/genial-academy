import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./stylesLogin.css";
import ModalLogin from "../../components/Modals/Modal_Login/modalLogin";

export const Login = () => {
    const [formValues, setFormValues] = useState({ username: "", password: "" });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors); // Actualiza los errores
        if (Object.keys(errors).length === 0) {
            try {
                const token = `eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJQZWRybzEyMyIsImlhdCI6MTcxOTk1MDQ4MSwiZXhwIjoxNzIwMDM2ODgxfQ.1HanEFQHYQXY5ZdHyVtb6FrTaLfnJHM3dnMhvLbEl9Il3oX8JPvWS_n7Gw_35Y3b`;
                const response = await axios.post('https://genial-academy-backend.onrender.com/auth/login', formValues,{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', formValues.username);
                setIsSubmit(true);

            } catch (error) {
                console.error('Error al iniciar sesión:', error);
            }
        }
    };
    
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.username.trim()) {
            errors.username = 'Debes escribir un nombre de usuario';
        }
        if (!values.password.trim()) {
            errors.password = 'Debes escribir una contraseña';
        }
        return errors;
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login__container">
            <div className="login__image"></div>
            <div className="login__wrapper">
                <div className="login__form__box">
                    {Object.keys(formErrors).length === 0 && isSubmit && 
                    (
                        <ModalLogin isOpen={isSubmit} onClose={() => setIsSubmit(false)} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Inicia Sesión</h2>
                        <div className="login__input__box">
                            <div className="login__input__title">Nombre de Usuario:</div>
                            <input type="text" name="username" value={formValues.username} onChange={handleChange} />
                        </div>
                        <p className="login__error-message" style={{ visibility: formErrors.username ? 'visible' : 'hidden' }}>{formErrors.username}</p>
                        <div className="login__input__box">
                            <div className="login__input__title">Contraseña:</div>
                            <div className="login__password__input__container">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    value={formValues.password} 
                                    onChange={handleChange} 
                                />
                                <button type="button" className="login__toggle__password" onClick={toggleShowPassword}>
                                    {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                </button>
                            </div>
                        </div>
                        <p className="login__error-message" style={{ visibility: formErrors.password ? 'visible' : 'hidden' }}>{formErrors.password}</p>

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