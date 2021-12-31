import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <Link href="/">
                <a>
                    <Image
                        src="/logo-oceaning.png"
                        alt="Logo Oceaning"
                        width={287.03}
                        height={32}
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