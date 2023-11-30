
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/react-in-jsx-scope */
'use client';

import './style.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap-trial/ScrollTrigger';
import {ScrollSmoother} from 'gsap-trial/ScrollSmoother';
import {useGSAP} from '@gsap/react';
import {useEffect, useRef} from 'react';

export default function Lobby() {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	const main = useRef<any>();
	const smoother = useRef<any>();

	const scrollTo = () => {
		smoother.current.scrollTo('.box-c', true, 'center center');
	};

	useEffect(() => {
		// Create the smooth scroller FIRST!
		smoother.current = ScrollSmoother.create({
			smooth: 2, // Seconds it takes to "catch up" to native scroll position
			effects: true, // Look for data-speed and data-lag attributes on elements and animate accordingly
		});
		// ScrollTrigger.create({
		// 	trigger: '.box-c',
		// 	// Pin: true,
		// 	start: 'center center',
		// 	end: '+=50%',
		// 	markers: true,
		// });
	}, []);

	return (
		<>
			<div id='smooth-wrapper' ref={main}>
				<div id='smooth-content'>
					<div className='header'>
						<h1 className='title'>GreenSock ScrollSmoother on a React App</h1>
						<button className='button' onClick={scrollTo}>Jump to C</button>
					</div>
					<div className='box box-a' data-speed='0.5'>a</div>
					<div className='box box-b' data-speed='0.8'>b</div>
					<div className='box box-c' data-speed='1.5'>c</div>
					<div className='line'></div>
				</div>
			</div>
		</>
	);
}
