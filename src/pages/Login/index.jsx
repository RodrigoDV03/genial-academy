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
            <div className={`wrapper${action}`}>
                <div className="form__box login">
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="success">Inicio de sesión realizado</div>) : ""}
                    <form onSubmit={handleSubmit}>
                        <h1>HOLA! GENIALACADEMY</h1>
                        <h2>Iniciar Sesión</h2>
                        <div className="input__box">
                            Correo electrónico:
                            <input type="email" name="email" value={formValues.email} onChange={handleChange} />
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="input__box">
                            Contraseña:
                            <input type="password" name="password" value={formValues.password} onChange={handleChange} />
                        </div>
                        <p>{formErrors.password}</p>
                        <button>Iniciar Sesión</button>

                    <div className="register__link">
                        <p>¿No tienes una cuenta? <a href="#">Registrate</a>
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
