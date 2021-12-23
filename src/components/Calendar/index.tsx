import styles from './styles.module.scss';

type CalendarProps = {
    day: number;
    month: string;
}

export function Calendar(props: CalendarProps) {

    return (
        <>
            <div className={styles.calendar}>
                <div className={styles.calendarDay}>
                    <div className={styles.day}>
                        <span>{props.day}</span>
                    </div>
                </div>
                <div className={styles.calendarMonth}>
                    <div className={styles.month}>
                        <span>{props.month}</span>
                    </div>

                </div>
            </div>
        </>
    );
}