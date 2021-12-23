import Link from 'next/link';
import { GreenButton } from '../../components/GreenButton';
import styles from './styles.module.scss';

export default function Banner() {
    return (
        <>
            <div className={styles.containerBanner}>
                <div className={styles.yellowText}>
                    <p>Time de desenvolvimento</p>
                </div>

                <div className={styles.whiteText}>
                    <p>Sua evolução começa agora</p>
                </div>

                <div className={styles.grayText}>
                    <p>Faça parte dessa jornada junto com a Oceaning e conquiste o</p>
                    <p>mundo com usas habilidades de programação.</p>
                </div>

                <Link href={"/register"}>
                    <a className={styles.greenButton}>
                        <GreenButton text={'COMEÇAR AGORA'} />
                    </a>
                </Link>
            </div>
        </>
    );
}