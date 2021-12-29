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

// type addSkillProps = {
//     name: string;
// }

// type SkillProps = {
//     skills: Skill[]
// }

const habilidades = [
    "",
    "React",
    "React Native",
    "PHP",
    "MySQL",
    "Node Js",
    "Python",
    "Docker",
    "Java",
    "Ruby",
    "Javascript",
    "C# ",
];

export default function Skills() {
    //Add dev name after Olá
    const devName = parseCookies();
    const dev = devName.DEV_NAME;
    const [developerName, setDeveloperName] = useState("");

    const skillsSelected = [];

    useEffect(() => {
        setDeveloperName(dev);
    }, []);

    //Add row in the table on click the skill button
    const [skillRow, setSkillRow] = useState([]);

    function filterItems(query) {
        return habilidades.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    function addSkill(nome: any) {
        console.log(skillsSelected.some(e => e === nome.item));

        if (skillsSelected.some(e => e === nome.item)) return;

        console.log(nome.item)

        skillsSelected.push(nome.item);

        const tdRemover = <td className={styles.tdBtnRemove}>REMOVER</td>
        let tdSkill = [];

        const createTdSkill = (skillSelected, index, array) => {

            tdSkill.push(
                <tr key={habilidades.indexOf(skillSelected)}>
                    <td key={habilidades.indexOf(skillSelected)} className={styles.tdSkill}>{skillSelected}</td>
                    <td key={habilidades.indexOf(skillSelected) * 2} className={styles.tdBtnRemove}>REMOVER</td>
                    {/* {tdRemover} */}
                </tr>


            );
        }

        skillsSelected.forEach(createTdSkill);

        let skills = []
        skills.push(skillRow);
        skills.push(tdSkill);

        setSkillRow(skills)
    }

    //Function to search typed skills
    const searchSkills = event => {

        const input = event.target.value

        if (input.length > 2) {

            const foundSkills = filterItems(input);

            const elements = [];

            foundSkills.map(function (item, index, array) {
                console.log(habilidades.indexOf(item) * 3)
                elements.push(
                    <button
                        key={habilidades.indexOf(item)}
                        onClick={() => addSkill({ item })}
                        className={styles.skillButton}
                    >
                        {item}
                    </button>
                );
            });

            ReactDOM.render(elements, document.getElementById('skillButton'));
        }

        if (input.length <= 2) {

            const elements = [];
            elements.push(<></>);
            ReactDOM.render(elements, document.getElementById('skillButton'));
        }

    }

    return (
        <>
            <div className={styles.containerSkills}>
                <div className={styles.yellowText}>
                    <p>Olá {developerName},</p>
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

                <div className={styles.selectedSkillsHeader}>
                    <main className={styles.mainHeader}>
                        <span id={styles.textHeaderSkillsLeft}>5 Habilidades adicionadas</span>
                        <span id={styles.textHeaderSkillsRight}>VER HABILIDADES &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDoubleUp} /></span>
                    </main>


                </div>

                <div className={styles.selectedSkillsBody}>
                    <main className={styles.mainBody}>
                        <table>
                            <thead>
                                <tr>
                                    <td className={styles.tdSkill}></td>
                                    <td className={styles.tdSkill}></td>
                                </tr>
                            </thead>
                            <tbody>
                                {skillRow}

                            </tbody>


                        </table>


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
