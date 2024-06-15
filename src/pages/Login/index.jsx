import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stylesLogin.css";
import ModalLogin from "../../components/Modals/Modal_Login/modalLogin";

export const Login = () => {
    const initialLoginValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialLoginValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch("http://localhost:8080/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formValues),
                });
                if(response.status === 200){
                    setIsSubmit(true);
                    localStorage.setItem("username", formValues.username);
                    setModalOpen(true);
                }
                else{
                    console.log("ERROR");
                    setFormErrors({ backend: "Usuario o contraseña incorrecto" });
                }

                
            } catch (error) {
                console.log("ERROR");
                setFormErrors({ backend: "Usuario o contraseña incorrecto" });
            }
        } else {
            setFormErrors(errors);
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
        } else if (values.password.length < 6) {
            errors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        return errors;
    };


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
        <div className="login__container">
            <div className="login__image"></div>
            <div className="login__wrapper">
                <div className="login__form__box">
                    {isSubmit && (
                        <ModalLogin isOpen={isModalOpen} onClose={handleCloseModal} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Iniciar Sesión</h2>
                        <div className="login__input__box">
                            <div className="login__input__title">Nombre de Usuario:</div>
                            <input type="text" name="username" value={formValues.username} onChange={handleChange} />
                        </div>
                        <p className="login__error-message">{formErrors.username}</p>
                        <div className="login__input__box">
                            <div className="login__input__title">Contraseña:</div>
                            <div className="password__input__container">
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
                        <p className="login__error-message">{formErrors.password}</p>

                        {formErrors.backend && !isSubmit && <p className="login__error-message">{formErrors.backend}</p>}

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
