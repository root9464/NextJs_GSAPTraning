/* eslint-disable react/react-in-jsx-scope */
import {Gsap} from '@/components/Gsap';
import styles from './global.module.scss';

export default function Home() {
	return (
		<main className={styles.main}>
			<Gsap/>
		</main>
	);
}
