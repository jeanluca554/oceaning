import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link';
import { GreenButton } from '../../components/GreenButton';
import styles from './styles.module.scss';
import { parseCookies } from 'nookies';
import { GetStaticProps } from 'next';
import { SkillButton } from '../../components/SkillButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
// type Skill = {
//     id: string;
//     name: string;
// }

// type SkillProps = {
//     skills: Skill[]
// }

const habilidades = [
    "React",
    "React Native",
    "PHP",
    "MySQL",
    "Node Js",
    "Python",
    "Docker",
    "Java",
    "Ruby",
]

// export default function Skills({ skills }: SkillProps) {
export default function Skills() {

    const devName = parseCookies();

    // const [inputSkill, setInputSkill] = useState('');

    function filterItems(query) {
        return habilidades.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    const searchSkills = event => {
        const input = event.target.value;

        if (input.length > 2) {

            const foundSkills = filterItems(input);

            const elements = [];

            foundSkills.forEach(function (item, index, array) {

                elements.push(<SkillButton text={item} key={index} />);

            });

            ReactDOM.render(elements, document.getElementById('skillButton'));
        }
        if (input.length <= 2) {

            const elements = [];
            elements.push(<></>);
            ReactDOM.render(elements, document.getElementById('skillButton'));
        }

    }

    console.log(devName.DEV_NAME);


    return (
        <>
            <div className={styles.containerSkills}>
                <div className={styles.yellowText}>
                    <p>Olá {devName.DEV_NAME},</p>
                </div>

                <div className={styles.whiteText}>
                    <p>Quais são suas habilidades?</p>
                </div>

                <div className={styles.grayText}>
                    <p>Nos diga como devemos te chamar e qual é o seu e-mail</p>
                    <p>para que possamos te enviar novidades</p>
                </div>


                {/* <form action=""> */}
                <div className={styles.input}>
                    <input
                        type="text"
                        className={styles.inputSkill}
                        placeholder='Digite uma habilidade'
                        onChange={searchSkills}
                        required
                    />
                </div>

                <div className={styles.buttonsSkills}>
                    <div className={styles.btnSkill} id='skillButton'>
                        <>
                        </>
                    </div>
                </div>

                <div className={styles.selectedSkills}>
                    <main className={styles.mainHeader}>
                        <span id={styles.textHeaderSkillsLeft}>5 Habilidades adicionadas</span>
                        <span id={styles.textHeaderSkillsRight}>VER HABILIDADES &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDoubleUp} /></span>
                    </main>

                </div>

                {/* <Link href={"/"}> */}
                <a className={styles.greenButton} type='submit'>
                    <GreenButton text={'FINALIZAR'} />
                </a>
                {/* </Link> */}
                {/* </form> */}
            </div>

        </>
    );
}
