import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./stylesRegister.css";
import ModalRegister from "../../components/Modals/Modal_Register/modalRegister";

export const Register = () => {
    const initialRegisterValues = { name: "", lastname: "", username: "", email: "", password: "", role: "USER" };
    const [formValues, setFormValues] = useState(initialRegisterValues);
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
                const response = await axios.post('https://genial-academy-backend.onrender.com/auth/register', formValues,{
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                localStorage.setItem('token', JSON.stringify(response.data.token));
                localStorage.setItem('username', formValues.username);
                setIsSubmit(true);
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    setFormErrors({ ...formErrors, general: 'El correo electrónico o nombre de usuario ya está en uso.' });
                } else {
                    console.error('Error al registrar:', error);
                }
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
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name.trim()) {
            errors.name = 'Debes escribir tu nombre';
        }
        if (!values.lastname.trim()) {
            errors.lastname = 'Debes escribir tu apellido';
        }
        if (!values.username.trim()) {
            errors.username = 'Debes escribir un nombre de usuario';
        }
        if (!values.email.trim()) {
            errors.email = 'Debes escribir un correo electrónico';
        } else if (!regex.test(values.email)) {
            errors.email = 'Debes escribir un correo electrónico válido';
        }
        if (!values.password.trim()) {
            errors.password = 'Debes escribir una contraseña';
        } else if (values.password.length < 6) {
            errors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        return errors;
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="register__container">
            <div className="register__image"></div>
            <div className="register__wrapper">
                <div className="register__form__box">
                    {Object.keys(formErrors).length === 0 && isSubmit && 
                    (
                        <ModalRegister isOpen={isSubmit} onClose={() => setIsSubmit(false)} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Regístrate</h2>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre:</div> 
                            <input type="text" name="name" value={formValues.name} onChange={handleChange} />
                        </div>
                        <p className="register__error-message">{formErrors.name}</p>
                        <div className="register__input__box">
                            <div className="register__input__title">Apellido:</div> 
                            <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
                        </div>
                        <p className="register__error-message">{formErrors.lastname}</p>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre de Usuario:</div> 
                            <input type="text" name="username" value={formValues.username} onChange={handleChange} />
                        </div>
                        <p className="register__error-message">{formErrors.username}</p>
                        <div className="register__input__box">
                            <div className="register__input__title">Correo electrónico:</div> 
                            <input type="email" name="email" value={formValues.email} onChange={handleChange} />
                        </div>
                        <p className="register__error-message">{formErrors.email}</p>
                        <div className="register__input__box">
                            <div className="register__input__title">Contraseña:</div> 
                            <div className="register__password__input__container">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    value={formValues.password} 
                                    onChange={handleChange} 
                                />                 
                                <button type="button" className="register__toggle__password" onClick={toggleShowPassword}>
                                    {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                </button>
                            </div>
                        </div>
                        <p className="register__error-message">{formErrors.password}</p>

                        <button className="register__Button">
                            Regístrate
                        </button>        

                        <div className="login__link">
                            <p>¿Ya tienes una cuenta? <Link to="/">Inicia Sesión</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
