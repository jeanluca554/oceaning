import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss';

type ButtonProps = {
    text: string;
    type?: string;
}

export function GreenButton(props: ButtonProps) {

    return (
        <>
            <div className={styles.greenButton}>
                <button type={'submit'}>{props.text} &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </>
    );
}