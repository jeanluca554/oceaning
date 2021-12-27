import Link from 'next/link';
import styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <Link href="/">
                <a>
                    <img
                        src="/logo-oceaning.png"
                        alt="Logo Oceaning"
                        className={styles.logo}
                    />
                </a>
            </Link>


            <div className={styles.itemsRight}>
                <p className={styles.compartilhe}>COMPARTILHE</p>
                <p className={styles.theOceaning}>@theoceaning</p>

                <p className={styles.logoInstagram}><FontAwesomeIcon icon={faInstagram} /></p>
            </div>





        </header>
    );
}