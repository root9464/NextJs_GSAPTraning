/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable react/react-in-jsx-scope */
'use client';
import {useEffect, useRef} from 'react';
import styles from '@/app/global.module.scss';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Gsap = (): JSX.Element => {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#box1',
				start: 'center center',
				end: '+=500',
				scrub: true,
				markers: {
				  startColor: 'white',
				  endColor: 'white',
				},
				snap: {
					snapTo: 'labels', // Snap to the closest label in the timeline
					duration: {min: 0.2, max: 10}, // The snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
					delay: 0.2, // Wait 0.2 seconds from the last scroll event before doing the snapping
					ease: 'power1.inOut', // The ease of the snap animation ("power3" by default)
				  },
			  },
		});
		tl.addLabel('start')
			.to('#box2', {
				xPercent: 100,
				duration: 1,
			})
			.addLabel('end');
	});

	return (
		<div className={styles.gsap}>
			<section className={styles.section2} >
				<button>click</button>
			</section>
			<section className={styles.section} id='gs'>
				<div id='box1'></div>
				<div id='box2'></div>
				<div id='box'></div>
			</section>
			<section className={styles.section3} ></section>
		</div>
	);
};

export {Gsap};
