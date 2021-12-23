import React from 'react';
import Link from 'next/link';
import { GreenButton } from '../../components/GreenButton';
import styles from './styles.module.scss';

export default function Skills() {

    return (
        <>
            <div className={styles.containerSkills}>
                <div className={styles.yellowText}>
                    <p>Olá {"Jean"}</p>
                </div>

                <div className={styles.whiteText}>
                    <p>Quais são suas habilidades?</p>
                </div>

                <div className={styles.grayText}>
                    <p>Nos diga como devemos te chamar e qual é o seu e-mail</p>
                    <p>para que possamos te enviar novidades</p>
                </div>


                <form action="">
                    <div className={styles.input}>
                        <input
                            type="text"
                            className={styles.inputName}
                            placeholder='Digite uma habilidade'
                            required
                        />
                        <span className={styles.error}></span>
                    </div>
                    <Link href={"/"}>
                        <a className={styles.greenButton} type='submit'>
                            <GreenButton text={'CONTINUAR'} />
                        </a>
                    </Link>
                </form>
            </div>
        </>
    );
}