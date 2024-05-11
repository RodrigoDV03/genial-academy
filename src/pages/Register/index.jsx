import React, {useState, useEffect} from "react";
import "./styles.css";

export const Register = () => {

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

    const initialRegisterValues = {name:"", lastname:"", email:"", password:""};
    const [formValues, setFormValues] = useState(initialRegisterValues);
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
        if(!values.name.trim()){
            errors.name = 'Debes escribir tu nombre';
        }
        if(!values.lastname.trim()){
            errors.lastname = 'Debes escribir tu apellido';
        }
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

    return (
    <div className={`wrapper${action}`}>
        <div className="form__box login">
            <form>
                <h1>HOLA! GENIALACADEMY</h1>
                <h2>Iniciar Sesión</h2>
                <div className="input__box">
                    Correo electrónico:
                    <input type="email"/>
                </div>
                <div className="input__box">
                    Contraseña:
                    <input type="password"/>
                </div>
                <button>Iniciar Sesión</button>

            <div className="register__link">
                <p>
                ¿No tienes una cuenta? <a href="#" onClick={registerLink}>Registrate</a>
                </p>
            </div>
            </form>
        </div>

        <div className="form__box register">
            {Object.keys(formErrors).length === 0 && isSubmit ? 
            (<div className="success">Se registró correctamente</div>
            ) : ""}
            <form onSubmit={handleSubmit}>
                <h1>HOLA! GENIALACADEMY</h1>
                <h2>Regístrate</h2>
                <div className="input__box">
                    Nombres:
                    <input type="text" name="name" value={formValues.name} onChange={handleChange} />
                </div>
                <p>{formErrors.name}</p>
                <div className="input__box">
                    Apellidos:
                    <input type="text" name="lastname" value={formValues.lastname} onChange={handleChange} />
                </div>
                <p>{formErrors.lastname}</p>
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
                <button>Registrarse</button>

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
