import { Calendar } from '../components/Calendar';
import { GreenButton } from '../components/GreenButton';
import Link from 'next/link';


import styles from './home.module.scss';

export default function Home() {
	return (
		<>
			<div className={styles.yellowText}>
				<p>Developers Oceaning</p>
			</div>
			<div className={styles.mainText}>
				<p>Faça parte do time de</p>
				<p>desenvolvimento da agência</p>
				<p>Oceaning</p>
			</div>
			<div className={styles.calendar}>
				<Calendar day={22} month='JUN' />
				<Calendar day={23} month='JUN' />
				<Calendar day={24} month='JUN' />
				<p id={styles.live}>Início da live</p>
				<p id={styles.time}>19:00</p>

			</div>
			<Link href={"/banner"}>
				<a className={styles.greenButton}>
					<GreenButton text={'INSCREVA-SE'} />
				</a>
			</Link>

		</>
	)
}
