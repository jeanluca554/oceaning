import React, { FormEvent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link';
import { GreenButton } from '../../components/GreenButton';
import styles from './styles.module.scss';
import { parseCookies } from 'nookies';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const skills = [
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

    const [skillsSelected, setSkillsSelected] = useState([]);
    const [lengthSkillsSelected, setLengthSkillsSelected] = useState(0);
    const [activeTable, setActiveTable] = useState(false);

    //Add row in the table on click the skill button
    const [skillRow, setSkillRow] = useState([]);

    useEffect(() => {
        setDeveloperName(dev);

    }, [dev]);


    useEffect(() => {
        setLengthSkillsSelected(skillsSelected.length);

    }, [skillsSelected.length]);

    function handleRegisterDevSkills(event: FormEvent) {
        //event.preventDefault();
        if (lengthSkillsSelected > 0) {
            axios.post('/api/register', { developerName, skillsSelected });
        }

    }

    function filterItems(query) {
        return skills.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    function addSkill(nome: any) {

        // Show true or false if already exists
        // console.log(skillsSelected.some(e => e === nome.item));

        if (skillsSelected.some(e => e === nome.item)) return;

        //console.log(nome.item)

        skillsSelected.push(nome.item);

        let tdSkill = [];
        const createTdSkill = (skillSelected, index, array) => {

            tdSkill.push(
                <tr key={skills.indexOf(skillSelected)}>
                    <td key={skills.indexOf(skillSelected)} className={styles.tdSkill}>{skillSelected}</td>
                    <td
                        key={skills.indexOf(skillSelected) * 2}
                        className={styles.tdBtnRemove}
                    >
                        <a onClick={removeSkillRow}>
                            REMOVER
                        </a>
                    </td>
                </tr>
            );
        }

        skillsSelected.forEach(createTdSkill);
        setSkillRow(tdSkill);
    }

    //Function to search typed skills
    const searchSkills = event => {

        const input = event.target.value

        if (input.length > 2) {

            const foundSkills = filterItems(input);

            const elements = [];

            foundSkills.map(function (item, index, array) {
                // console.log(skills.indexOf(item) * 3)
                elements.push(
                    <button
                        key={skills.indexOf(item)}
                        onClick={() => addSkill({ item })}
                        className={styles.skillButton}
                        type='button'
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

    function findSelectedSkillToRemoveIt(skill: string) {

        var name = skill;
        var index = skillsSelected.indexOf(name);
        while (index >= 0) {
            skillsSelected.splice(index, 1);
            index = skillsSelected.indexOf(name);
        }
        console.log(skillsSelected);
        setSkillsSelected(skillsSelected);
    }

    const removeSkillRow = event => {
        const textContent = event.target.parentNode.parentNode.firstChild.textContent;
        console.log(skillsSelected)
        findSelectedSkillToRemoveIt(textContent);

        const parent = event.target.parentNode.parentNode;

        while (parent.firstChild) {
            parent.removeChild(parent.lastChild);
        }

        setLengthSkillsSelected(skillsSelected.length);

        console.log(skillsSelected)
    };

    function showSkills() {
        console.log(activeTable);
        setActiveTable(true);
        console.log(activeTable);
    }
    function hideSkills() {
        setActiveTable(false);
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


                <form action="/register-success" onSubmit={handleRegisterDevSkills}>
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

                    {lengthSkillsSelected < 1 ?
                        <div className={styles.SkillsHeader}>
                            <main className={styles.mainHeaderWithoutSkills}>
                                <span>Nenhuma habilidade selecionada</span>
                            </main>
                        </div>
                        :
                        <>
                            <div className={styles.selectedSkillsHeader}>
                                <main className={styles.mainHeader}>
                                    {lengthSkillsSelected == 1 ?
                                        <>
                                            <span id={styles.textHeaderSkillsLeft}>
                                                {lengthSkillsSelected} Habilidade adicionada
                                            </span>
                                            {activeTable ?

                                                <span
                                                    id={styles.textHeaderSkillsRight}
                                                    onClick={hideSkills}
                                                >

                                                    FECHAR HABILIDADES &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDoubleDown} />
                                                </span>
                                                :
                                                <span
                                                    id={styles.textHeaderSkillsRight}
                                                    onClick={showSkills}
                                                >

                                                    VER HABILIDADES &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDoubleUp} />
                                                </span>
                                            }

                                        </>
                                        :
                                        <>
                                            <span id={styles.textHeaderSkillsLeft}>
                                                {lengthSkillsSelected} Habilidades adicionadas
                                            </span>
                                            {activeTable ?

                                                <span
                                                    id={styles.textHeaderSkillsRight}
                                                    onClick={hideSkills}
                                                >

                                                    FECHAR HABILIDADES &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDoubleDown} />
                                                </span>
                                                :
                                                <span
                                                    id={styles.textHeaderSkillsRight}
                                                    onClick={showSkills}
                                                >

                                                    VER HABILIDADES &nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDoubleUp} />
                                                </span>
                                            }
                                        </>
                                    }
                                </main>

                            </div>

                            {activeTable ?
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
                                :
                                <></>
                            }

                        </>
                    }

                    {/* <Link href={"/"}> */}
                    <a className={styles.greenButton} type='submit'>
                        <GreenButton text={'FINALIZAR'} />
                    </a>
                    {/* </Link> */}
                </form>
            </div>

        </>
    );
}
