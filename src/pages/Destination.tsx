import React from 'react';
import { DestinationTabs, DestinationImgContainer, DestinationContent } from '../components/module/destinations';
import { PageCaption, PageBackground } from '../components/ui';
import { imgs } from '../assets';

import '../styles/destination.css';

const Destination = () => {
	return (
		<main className="container flex items-center lg:block">
			<section className="mt-16 w-full">
				<PageBackground
					desktop={imgs.destination.desktop}
					tablet={imgs.destination.tablet}
					mobile={imgs.destination.mobile}
				/>
				<div>
					<PageCaption count={1} text="Pick your destination" />
				</div>
				<section className="destination-wrapper">
					<DestinationImgContainer />
					<section>
						<DestinationTabs />
						<DestinationContent />
					</section>
				</section>
			</section>
		</main>
	);
};

export default Destination;
