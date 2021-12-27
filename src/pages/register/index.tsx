import Link from 'next/link';
import { setCookie } from 'nookies';
import { useEffect, useState } from 'react';
import { GreenButton } from '../../components/GreenButton';
import styles from './styles.module.scss';

export default function Register() {

    const [dev, setDev] = useState('');

    const onChange = event => {
        setDev(event.target.value)
        // console.log(event.target.value);
    }

    useEffect(() => {
        const fields = document.querySelectorAll("[required]");

        function ValidateField(field) {

            // verificar se existem erros
            function verifyErrors() {
                let foundError: any = false;

                for (let error in field.validity) {
                    //se não for customError
                    //então verifica se tem erro
                    if (field.validity[error] && !field.validity.valid) {
                        foundError = error;
                    }
                }
                // console.log(foundError);

                return foundError;
            }

            return verifyErrors();
        }

        function customValidation(event) {


            const field = event.target;

            const error = ValidateField(field);
            // console.log("Error Existis: ", error);

            const spanErrorName = field.parentNode.querySelector("span");

            if (error) {
                spanErrorName.classList.add("active");
                spanErrorName.innerHTML = "Campo obrigatório";

            } else {
                spanErrorName.classList.remove("active");
                spanErrorName.innerHTML = ""
            }
        }

        for (let field of fields as any) {
            field.addEventListener("invalid", event => {
                // eliminar o bubble
                event.preventDefault();

                customValidation(event);
            });
            field.addEventListener("blur", customValidation)
        }

        document.querySelector("form")
            .addEventListener("submit", event => {
                // const inputName = (document.querySelector("#devName"));
                // const devName = inputName.value;
                console.log(dev);

                setCookie(null, 'DEV_NAME', dev, {
                    maxAge: 86400 * 1,
                    path: '/',
                })

                //não enviar formulário para testes
                // event.preventDefault();
            });
    })




    return (
        <>
            <div className={styles.containerRegister}>
                <div className={styles.yellowText}>
                    <p>Vamos começar</p>
                </div>

                <div className={styles.whiteText}>
                    <p>Como devemos te chamar?</p>
                </div>

                <div className={styles.grayText}>
                    <p>Nos diga como devemos te chamar e qual é o seu e-mail</p>
                    <p>para que possamos te enviar novidades</p>
                </div>

                <form action="/skills">
                    <div className={styles.input}>
                        <input
                            id='devName'
                            type="text"
                            className={styles.inputName}
                            placeholder='Digite seu nome'
                            onBlur={onChange}
                            // value={dev}
                            required
                        />
                        <span className={styles.error} id={"erronome"}></span>

                        {/* <input
                            type="email"
                            className={styles.inputEmail}
                            placeholder='Informe o email'
                            required
                        />
                        <span className={styles.error} id={"erronome2"}></span> */}
                    </div>

                    <a className={styles.greenButton} type='submit'>
                        <GreenButton text={'CONTINUAR'} />
                    </a>

                </form>
            </div>
        </>
    );
}