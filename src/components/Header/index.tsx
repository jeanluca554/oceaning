import styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <a href="/">
                <img
                    src="/logo-oceaning.png"
                    alt="Logo Oceaning"
                    className={styles.logo}
                />
            </a>


            <div className={styles.itemsRight}>
                <p className={styles.compartilhe}>COMPARTILHE</p>
                <p className={styles.theOceaning}>@theoceaning</p>

                <p className={styles.logoInstagram}><FontAwesomeIcon icon={faInstagram} /></p>
            </div>





        </header>
    );
}