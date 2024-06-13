import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stylesRegister.css";
import ModalRegister from "../../components/Modals/Modal_Register/modalRegister";

export const Register = () => {
    const initialRegisterValues = { name: "", lastname: "", username: "", email: "", password: "" };
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
        if (Object.keys(errors).length === 0) {
            try {
                const response = await fetch("http://localhost:8080/users/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formValues),
                });
                setIsSubmit(true);
            } catch (error) {
                console.log("Error");
            }
        } else {
            setFormErrors(errors);
        }
    }

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
            <div className="register__image"></div>
            <div className="wrapper">
                <div className="form__box">
                    {Object.keys(formErrors).length === 0 && isSubmit && 
                    (
                        <ModalRegister isOpen={isModalOpen} onClose={handleCloseModal} />
                    )}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Regístrate</h2>
                        <div className="input__box">
                            <div className="input__title">Nombre:</div> 
                            <input type="text" name="name" value={formValues.name} onChange={handleChange} />
                        </div>
                        <p className="error-message">{formErrors.name}</p>
                        <div className="input__box">
                            <div className="input__title">Apellido:</div> 
                            <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
                        </div>
                        <p className="error-message">{formErrors.lastname}</p>
                        <div className="input__box">
                            <div className="input__title">Nombre de Usuario:</div> 
                            <input type="text" name="username" value={formValues.username} onChange={handleChange} />
                        </div>
                        <p className="error-message">{formErrors.username}</p>
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

                        <button className="register__Button" onClick={handleOpenModal}>
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
