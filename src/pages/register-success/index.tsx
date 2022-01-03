import Link from 'next/link';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function RegisterSuccess() {
    return (
        <>
            <div className={styles.containerRegisterSuccess}>
                <div className={styles.yellowText}>
                    <p>Parabéns!</p>
                </div>

                <div className={styles.whiteText}>
                    <p>Suas habilidades foram enviadas</p>
                </div>

                <div className={styles.grayText}>
                    <p>Faça parte dessa jornada junto com a Oceaning e conquiste o</p>
                    <p>mundo com suas habilidades de programação.</p>
                </div>

                <Link href={"/developers-list"}>
                    <a className={styles.greenButton}>
                        <button type={'submit'}>VER TODOS &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
                    </a>
                </Link>
            </div>
        </>
    );
}