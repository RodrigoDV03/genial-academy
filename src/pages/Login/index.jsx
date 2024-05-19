import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./stylesLogin.css";

export const Login = () => {
    
// ---------------------------------------------------------------------

    const initialLoginValues = {email:"", password:""};
    const [formValues, setFormValues] = useState(initialLoginValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email.trim()){
            errors.email = 'Debes escribir un correo electrónico';
        } else if(!regex.test(values.email)){
            errors.email = 'Debes escribir un correo electrónico válido';
        }
        if(!values.password.trim()){
            errors.password = 'Debes escribir una contraseña';
        } else if(values.password.length < 6){
            errors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        return errors;
    }

// ---------------------------------------------------------------------

    return (
        <div className="container">
            <div className="login__image">
            </div>
            <div className="wrapper">
                <div className="form__box">
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="success">Sesión iniciada</div>) : ""}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Iniciar Sesión</h2>
                        <div className="input__box">
                            <div className="input__title">Correo electrónico:</div> 
                            <input type="email" name="email" value={formValues.email} onChange={handleChange} />
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="input__box">
                            <div className="input__title">Contraseña:</div> 
                            <input type="password" name="password" value={formValues.password} onChange={handleChange} />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="login__Button">
                            <Link to="/home" id={"Login__Link"}>Ingresar</Link>
                        </div>

                    <div className="register__link">
                        <p>¿No tienes una cuenta? <Link to="/register">Registrate</Link></p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
