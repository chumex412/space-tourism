import React from 'react';
import { PageBackground } from '../components/ui';
import { imgs } from '../assets';
import CrewContent from '../components/module/crew/components/CrewContent';

const Crew = () => {
	console.log('Rerenders');

	return (
		<section className="w-full">
			<PageBackground desktop={imgs.crew.desktop} tablet={imgs.crew.tablet} mobile={imgs.crew.mobile} />
			<CrewContent />
		</section>
	);
};

export default Crew;
