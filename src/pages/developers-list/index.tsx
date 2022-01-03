import React, { FormEvent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link';
import { GreenButton } from '../../components/GreenButton';
import styles from './styles.module.scss';
import axios from 'axios';
import { format } from "date-fns";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function DeveloperList() {
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {

        listDevelopers()
    }, []);

    async function listDevelopers() {

        const result = await axios.get('/api/developers-list');

        const res = result.data.developers;

        const td = [];

        const createTd = (item, index, array) => {
            const dateComplete = item.subscribedAt;

            const date = dateComplete.substr(0, 10)
            const splitDate = date.split('-', 3)

            const day = splitDate[2]
            const month = splitDate[1]
            const year = splitDate[0]

            const newDate = []

            newDate.push(day);
            newDate.push(month);
            newDate.push(year);

            const dateItem = newDate.join('/')

            console.log(dateItem)

            td.push(
                <tr key={item._id}>
                    <td className={styles.tdName}>{item.devName}</td>
                    <td className={styles.tdEmail}>jean@oceaning.com</td>
                    <td className={styles.tdSkills}>{item.skills.length} Habilidades</td>
                    <td className={styles.tdDate}>Recebido em {dateItem}</td>
                    <td className={styles.tdButton}>
                        <button className={styles.showSkills}>VER HABILIDADES</button>
                    </td>
                </tr>
            );
        }



        res.forEach(createTd);

        await setDevelopers(td);

        console.log(res.length);
    }

    return (
        <>
            <div className={styles.containerDevList}>
                <div className={styles.contentHeader}>
                    <div className={styles.yellowText}>
                        <p>{developers.length} desenvolvedores encontrados</p>
                    </div>

                    <Link href={"/register"}>
                        <a className={styles.greenButton}>
                            <button type={'submit'}>ADICIONAR &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
                        </a>
                    </Link>
                </div>
                <div className={styles.contentBody}>
                    <main className={styles.mainDevList}>
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                <>
                                    {developers}
                                </>
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>



        </>
    );
}
