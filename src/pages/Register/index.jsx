import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./stylesRegister.css";
import ModalRegister from "../../components/Modals/Modal_Register/modalRegister";
import eyeOpenIcon from "../../assets/images/eye-open.svg"; // Asegúrate de que la ruta sea correcta
import eyeClosedIcon from "../../assets/images/eye-closed.svg"; // Asegúrate de que la ruta sea correcta

export const Register = () => {
    const initialRegisterValues = { name: "", lastname: "", username: "", email: "", password: "", role: "USER" };
    const [formValues, setFormValues] = useState(initialRegisterValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [registrationError, setRegistrationError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://genial-academy-backend.onrender.com/auth/register', formValues, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            localStorage.setItem('token', JSON.stringify(response.data.token));
            localStorage.setItem('username', formValues.username);
            setIsSubmit(true);
            setRegistrationError(""); // Restablecer el error de registro
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setRegistrationError('El correo electrónico o nombre de usuario ya está en uso.');
            } else {
                console.error('Error al registrar:', error);
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="register__container">
            <div className="register__image"></div>
            <div className="register__wrapper">
                <div className="register__form__box">
                    {isSubmit && ( <ModalRegister isOpen={isSubmit} onClose={() => setIsSubmit(false)} /> )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Regístrate</h2>
                        <p className={`register__error-message ${registrationError ? "" : "hidden"}`}>{registrationError}</p>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre:</div> 
                            <input type="text" name="name" value={formValues.name} onChange={handleChange} required/>
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Apellido:</div> 
                            <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} required/>
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Nombre de Usuario:</div> 
                            <input type="text" name="username" value={formValues.username} onChange={handleChange} required/>
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Correo electrónico:</div> 
                            <input type="email" name="email" value={formValues.email} onChange={handleChange} required/>
                        </div>
                        <div className="register__input__box">
                            <div className="register__input__title">Contraseña:</div> 
                            <div className="register__password__input__container">
                                <input type={showPassword ? "text" : "password"} name="password" value={formValues.password} onChange={handleChange} required/>                 
                                <button type="button" className="register__toggle__password" onClick={toggleShowPassword}>
                                    <img src={showPassword ? eyeOpenIcon : eyeClosedIcon} alt="toggle password visibility" />
                                </button>
                            </div>
                        </div>

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
