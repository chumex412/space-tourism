import React from 'react';
import { PageBackground } from '../components/ui';
import { imgs } from '../assets';
import CrewContent from '../components/module/crew/components/CrewContent';

const Crew = () => {
	return (
		<main className="container flex items-center lg:block">
			<section className="w-full">
				<PageBackground desktop={imgs.crew.desktop} tablet={imgs.crew.tablet} mobile={imgs.crew.mobile} />
				<CrewContent />
			</section>
		</main>
	);
};

export default Crew;
