import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./stylesLogin.css";
import ModalLogin from "../../components/Modals/Modal_Login/modalLogin";

export const Login = () => {
    const initialLoginValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialLoginValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container">
            <div className="login__image"></div>
            <div className="wrapper">
                <div className="form__box">
                    {Object.keys(formErrors).length === 0 && isSubmit && (
                        <ModalLogin isOpen={isModalOpen} onClose={handleCloseModal} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Iniciar Sesión</h2>
                        <div className="input__box">
                            <div className="input__title">Correo electrónico:</div>
                            <input type="email" name="email" value={formValues.email} onChange={handleChange} />
                        </div>
                        <p className="error-message">{formErrors.email}</p>
                        <div className="input__box">
                            <div className="input__title">Contraseña:</div>
                            <div className="password__input__container">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    value={formValues.password} 
                                    onChange={handleChange} 
                                />
                                <button type="button" className="toggle__password" onClick={toggleShowPassword}>
                                    {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                </button>
                            </div>
                        </div>
                        <p className="error-message">{formErrors.password}</p>

                        <button className="login__Button" onClick={handleOpenModal}>
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
