import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss';

type ButtonProps = {
    text: string;
}

export function SkillButton(props: ButtonProps) {

    return (
        <>
            <div className={styles.skillButton}>
                <button>{props.text} &nbsp;<FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </>
    );
}