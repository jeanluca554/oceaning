import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss';

type ButtonProps = {
    text: string;
    onClick?: any;
}

export function SkillButton(props: ButtonProps) {

    function apresentar() {
        console.log("apresentar")
        const linha = [];

        linha.push(< td className={styles.tdSkill} > Skillll</td >)

        ReactDOM.render(linha, document.getElementById('skillButton'));
    }
    return (
        <>
            <div className={styles.skillButton}>
                <button onClick={apresentar}>{props.text} &nbsp;<FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </>
    );
}